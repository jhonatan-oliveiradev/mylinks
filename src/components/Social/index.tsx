import { ReactNode } from "react"

interface SocialProps {
  url: string,
  children: ReactNode
}

export function SocialLinks({url, children}: SocialProps) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className=""
    >
      {children}
    </a>
  )
}