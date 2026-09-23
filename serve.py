import http.server
import socketserver
import os

PORT = 4000
DIRECTORY = os.path.join(os.path.dirname(__file__), "dist")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"[{self.client_address[0]}] {format % args}")

with socketserver.ThreadingTCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving on http://0.0.0.0:{PORT}")
    print(f"Access via: http://192.168.100.122:{PORT}")
    httpd.serve_forever()
