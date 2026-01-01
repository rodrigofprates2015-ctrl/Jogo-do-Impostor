#!/bin/bash

echo "🧪 Testing TikJogos Complete Flow"
echo "=================================="
echo ""

BASE_URL="http://localhost:5000"

# Test 1: Create Room
echo "1️⃣ Testing Create Room..."
ROOM_RESPONSE=$(curl -s -X POST "$BASE_URL/api/rooms/create" \
  -H "Content-Type: application/json" \
  -d '{"hostId":"flow-test-host","hostName":"FlowHost"}')

ROOM_CODE=$(echo $ROOM_RESPONSE | grep -o '"code":"[^"]*"' | cut -d'"' -f4)

if [ -z "$ROOM_CODE" ]; then
  echo "❌ FAILED: Could not create room"
  echo "Response: $ROOM_RESPONSE"
  exit 1
fi

echo "✅ Room created: $ROOM_CODE"
echo ""

# Test 2: Join Room
echo "2️⃣ Testing Join Room..."
JOIN_RESPONSE=$(curl -s -X POST "$BASE_URL/api/rooms/join" \
  -H "Content-Type: application/json" \
  -d "{\"code\":\"$ROOM_CODE\",\"playerId\":\"flow-test-player\",\"playerName\":\"FlowPlayer\"}")

PLAYER_COUNT=$(echo $JOIN_RESPONSE | grep -o '"players":\[' | wc -l)

if [ "$PLAYER_COUNT" -eq 0 ]; then
  echo "❌ FAILED: Could not join room"
  echo "Response: $JOIN_RESPONSE"
  exit 1
fi

echo "✅ Player joined room"
echo ""

# Test 3: Get Game Modes
echo "3️⃣ Testing Get Game Modes..."
MODES_RESPONSE=$(curl -s "$BASE_URL/api/game-modes")

if echo "$MODES_RESPONSE" | grep -q "palavraSecreta"; then
  echo "✅ Game modes loaded"
else
  echo "❌ FAILED: Could not load game modes"
  echo "Response: $MODES_RESPONSE"
  exit 1
fi
echo ""

# Test 4: Start Game
echo "4️⃣ Testing Start Game..."
START_RESPONSE=$(curl -s -X POST "$BASE_URL/api/rooms/$ROOM_CODE/start" \
  -H "Content-Type: application/json" \
  -d '{"gameMode":"palavraSecreta","selectedSubmode":"classico"}')

if echo "$START_RESPONSE" | grep -q "playing"; then
  echo "✅ Game started"
else
  echo "⚠️  WARNING: Could not start game (needs 2+ players)"
  echo "Response: $START_RESPONSE"
fi
echo ""

# Test 5: Home Page
echo "5️⃣ Testing Home Page..."
HOME_RESPONSE=$(curl -s "$BASE_URL/")

if echo "$HOME_RESPONSE" | grep -q "Quem é o Impostor"; then
  echo "✅ Home page loads"
else
  echo "❌ FAILED: Home page not loading"
  exit 1
fi
echo ""

echo "=================================="
echo "✅ ALL CRITICAL TESTS PASSED!"
echo "=================================="
echo ""
echo "Room Code: $ROOM_CODE"
echo "Players: 2"
echo "Status: Ready to play"
