import { VNode } from 'vue'

export type NavItemWithButton = {
  text: string
  icon?: VNode
  toggle?: boolean
  onClick: () => void
}

export type NavItemChildren = {
  text: string
  radioOption?: {
    limit: number
  }
  items: NavItemWithButton[]
}

export interface NavItemWithChildren {
  text?: string
  children: (NavItemChildren | NavItemWithButton)[]
}

export type NavItem = NavItemWithButton | NavItemWithChildren

// social link ---------------------------------------------------------------

export type SocialLinkIcon = 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube'

export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}
// friends link ---------------------------------------------------------------

export interface FriendLink {
  name: string
  avatar: string
  desc: string
  link: string
}
