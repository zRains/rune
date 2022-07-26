export type NavItemWithLink = {
  text: string
  onClick: () => void
}

export type NavItemChildren = {
  text?: string
  items: NavItemWithLink[]
}

export interface NavItemWithChildren {
  text?: string
  children: (NavItemChildren | NavItemWithLink)[]
}

export type NavItem = NavItemWithLink | NavItemWithChildren

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
