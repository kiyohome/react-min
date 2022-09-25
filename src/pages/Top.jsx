import { Box, Button, Center, Space, Stack, Text } from "@mantine/core"
import { Link } from "react-router-dom"

function Top() {

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Center><Text mt="md">2回目以降ご利用の方</Text></Center>
      <Center><Button component={Link} to="/login">ログイン</Button></Center>
      <Center><Text mt="md">始めてご利用の方</Text></Center>
      <Center><Button component={Link} to="/profile-setting">プロフィール設定</Button></Center>
    </Box>
  )
}

export default Top
