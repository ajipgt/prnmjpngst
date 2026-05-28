export interface OgLogoSvgOptions {
        logoHeightPx?: number
        /** CSS color value applied via inline `style` so `currentColor` resolves on the path. */
        color?: string
}

// aspect ratio `width / height` is obtained from the `viewBox` attribute value "0 0 191.02 40"
const LOGO_ASPECT_RATIO = 191.02 / 40

/**
 * Logo SVG markup for Open Graph templates returned as a string `<svg>..</svg>`.
 *
 * Suitable for interpolation into OG image templates passed to `ImageResponse.create(..)`
 * exported by the `cf-workers-og/html` package.
 */
export function ogLogoSvg(options: OgLogoSvgOptions = {}): string {
        const { logoHeightPx = 40, color = 'currentColor' } = options
        const widthPx = logoHeightPx * LOGO_ASPECT_RATIO

        return `\
        <svg xmlns="http://www.w3.org/2000/svg" width="${widthPx}" height="${logoHeightPx}" fill="none" viewBox="0 0 191.02 40" style="color: ${color};">
                <text 
                        x="0" 
                        y="30" 
                        fill="currentColor" 
                        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" 
                        font-size="34" 
                        font-weight="900" 
                        letter-spacing="-0.04em">
                        prnmjpngst
                </text>
        </svg>`
}
