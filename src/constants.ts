import { i18n } from 'astro:config/client'

export const SITE_URL = import.meta.env.SITE
export const BASE_PATHNAME = import.meta.env.BASE_URL

export const IS_DEVELOPMENT = import.meta.env.DEV
export const IS_PRODUCTION = import.meta.env.PROD

export const DEFAULT_LOCALE = i18n?.defaultLocale || 'en'
export const LOCALES = i18n?.locales || [DEFAULT_LOCALE]

export type DateFormat = 'iso' | 'short'
export const DEFAULT_DATE_FORMAT: DateFormat = 'iso'

export const META_TITLE = 'prnmjpngst'
export const META_DESCRIPTION = 'Personal Note'

export const SITE_BRAND_NAME = 'prnmjpngst'

export const LAYOUT_NAV_LINKS = [
        { label: 'PKB Academy', href: '/pkb/' },
]

/**
 * Short tagline for site OG image (default `/og.png` image off the root pathname).
 */

export const OG_TAGLINE = "My second brain, but messier"

export const DEFAULT_OG_WIDTH_PX = 1200
export const DEFAULT_OG_HEIGHT_PX = 630

/**
 * Set to the X (Twitter) handle associated with the author/creator
 * (or `undefined` to omit the `twitter:creator` meta tag).
 */
export const OG_TWITTER_CREATOR_HANDLE: string | undefined = undefined

/**
 * Set to the X (Twitter) handle associated with the site owner / organization
 * (or `undefined` to omit `twitter:site` meta tag).
 */
export const OG_TWITTER_SITE_HANDLE: string | undefined = OG_TWITTER_CREATOR_HANDLE

/**
 * Repository URL for the project.
 */
export const PROJECT_REPO_URL = 'https://github.com/ajipgt/prnmjpngst'

/**
 * PKB Academy course configuration for learning platform integration.
 */
export const PKB_COURSE_TITLE = 'PKB Academy'
export const PKB_COURSE_SLUG = 'pkb-dasar'
export const PKB_QUIZ_PASS_SCORE = 70
export const PKB_FINAL_PASS_SCORE = 70
export const PKB_FINAL_PART_MIN_SCORE = 60

/**
 * PKB Academy scoring and assessment configuration.
 */
export const PKB_QUIZ_ITEM_COUNT = 5
export const PKB_QUIZ_ITEM_MIN = 3
export const PKB_PRACTICE_ITEM_COUNT = 10
export const PKB_PRACTICE_ITEM_MIN = 8
export const PKB_FINAL_A_ITEM_COUNT = 35
export const PKB_FINAL_A_ITEM_MIN = 30
export const PKB_FINAL_B_ITEM_COUNT = 6
export const PKB_FINAL_B_ITEM_MIN = 5

/**
 * PKB Academy attempt limits and timing.
 */
export const PKB_QUIZ_MAX_ATTEMPTS = 2
export const PKB_PRACTICE_MAX_ATTEMPTS = 3
export const PKB_FINAL_MAX_ATTEMPTS = 2
export const PKB_FINAL_ATTEMPT_HOURS = 24

/**
 * PKB Academy component weights for progress calculation.
 */
export const PKB_MODULE_PROGRESS_LESSON_WEIGHT = 0.7
export const PKB_MODULE_PROGRESS_QUIZ_WEIGHT = 0.2
export const PKB_MODULE_PROGRESS_PRACTICE_WEIGHT = 0.1
