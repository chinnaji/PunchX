import React from 'react'

export type Tchildren = {
  children: React.ReactNode
}

export interface TAllPosts {
  id: number
  date: string
  date_gmt: string
  guid: GuidOrTitleOrContent
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: GuidOrTitleOrContent
  content: GuidOrTitleOrContent
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta?: null[] | null
  categories?: number[] | null
  tags?: number[] | null
  yoast_head: string
  amp_validity?: null
  amp_enabled: boolean
  x_categories: string
  x_tags: string
  x_featured_media: string
  x_featured_media_medium: string
  x_featured_media_large: string
  x_featured_media_original: string
  x_date: string
  x_author: string
  x_gravatar: string
  x_metadata: XMetadata
  _links: {}
}
export interface GuidOrTitleOrContent {
  rendered: string
}
export interface Excerpt {
  rendered: string
  protected: boolean
}
export interface XMetadata {
  _thumbnail_id: string
  onesignal_meta_box_present: string
  onesignal_send_notification: string
  onesignal_modify_title_and_content: string
  onesignal_notification_custom_heading: string
  onesignal_notification_custom_content: string
  original_post_author: string
  _post_reference_name: string
  _bridtv_id: string
  _yoast_wpseo_focuskw: string
  _yoast_wpseo_metadesc: string
  _yoast_wpseo_linkdex: string
  _yoast_wpseo_content_score: string
  _yoast_wpseo_estimated_reading_time_minutes: string
  _yoast_wpseo_primary_category: string
}
