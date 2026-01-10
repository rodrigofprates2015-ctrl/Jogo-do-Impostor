import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart3, Users, Eye } from 'lucide-react';
import { AnalyticsChart } from '@/components/AnalyticsChart';

type AnalyticsSummary = {
  totalPageviews: number;
  totalUniqueVisitors: number;
  pageviewsLast30Days: Array<{ date: string; count: number }>;
  uniqueVisitorsLast30Days: Array<{ date: string; count: number }>;
};

type AnalyticsDashboardProps = {
  token: string | null;
};

export default function AnalyticsDashboard({ token }: AnalyticsDashboardProps) {
  const { data, isLoading, error } = useQuery<AnalyticsSummary>({
    queryKey: ['/api/analytics/summary', token],
    queryFn: async () => {
      if (!token) {
        throw new Error('No authentication token available');
      }
      
      const response = await fetch('/api/analytics/summary', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `${response.status}: ${response.statusText}`);
      }
      
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    refetchOnWindowFocus: false,
    enabled: !!token, // Only run query if token exists
  });

  if (isLoading) {
    return <AnalyticsLoadingSkeleton />;
  }

  if (!token) {
    return (
      <div className="p-6">
        <Card className="border-yellow-600">
          <CardContent className="pt-6">
            <p className="text-yellow-600 font-semibold mb-2">
              Autenticação necessária
            </p>
            <p className="text-sm text-muted-foreground">
              Faça login como administrador para visualizar os dados de analytics.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    const isDatabaseError = errorMessage.includes('503') || errorMessage.includes('Database not available');
    const isAuthError = errorMessage.includes('401') || errorMessage.includes('Não autorizado');
    
    return (
      <div className="p-6">
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive font-semibold mb-2">
              Erro ao carregar dados de analytics
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {isAuthError
                ? 'Token de autenticação inválido. Faça logout e login novamente.'
                : isDatabaseError 
                ? 'O banco de dados não está disponível. Configure a variável DATABASE_URL para habilitar o analytics.'
                : errorMessage}
            </p>
            {isDatabaseError && (
              <div className="bg-slate-800 p-4 rounded-md text-xs font-mono">
                <p className="text-slate-400 mb-2">Para configurar:</p>
                <p className="text-slate-300">1. Adicione DATABASE_URL nas variáveis de ambiente</p>
                <p className="text-slate-300">2. Execute: npm run db:push</p>
                <p className="text-slate-300">3. Reinicie o servidor</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Analytics de Tráfego</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Pageviews</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {data?.totalPageviews.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Todas as visualizações de página
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {data?.totalUniqueVisitors.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Visitantes identificados por cookie
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pageviews - Últimos 30 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsChart
              data={data?.pageviewsLast30Days || []}
              dataKey="count"
              color="#8884d8"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visitantes Únicos - Últimos 30 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsChart
              data={data?.uniqueVisitorsLast30Days || []}
              dataKey="count"
              color="#82ca9d"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AnalyticsLoadingSkeleton() {
  return (
    <div className="p-6 space-y-6">
      <Skeleton className="h-10 w-64" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
      </div>
    </div>
  );
}
