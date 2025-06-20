export interface ContactSubmission {
  id: string
  timestamp: string
  status: "unread" | "read"
  data: {
    inquiryType: string
    name: string
    email: string
    message: string
  }
}
