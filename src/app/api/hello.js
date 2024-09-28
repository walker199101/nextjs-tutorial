export default function handler(req, res) {
    if (req.method === 'GET') {
        // GET 요청일 때 실행되는 코드
        res.status(200).json({ message: 'Hello, World!' });
    } else {
        // 다른 HTTP 메서드 요청에 대해 에러 처리
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}