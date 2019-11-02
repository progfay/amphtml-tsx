declare global {
  namespace JSX {
    type PropertyType = boolean | number | string

    type AttributesType = {
      [key: string]: PropertyType
    }

    type AmpElementTagType = 'amp-3d-gltf' | 'amp-3q-player' | 'amp-access-laterpay' | 'amp-access-poool' | 'amp-access' | 'amp-accordion' | 'amp-action-macro' | 'amp-ad-exit' | 'amp-ad' | 'amp-addthis' | 'amp-analytics' | 'amp-anim' | 'amp-animation' | 'amp-apester-media' | 'amp-app-banner' | 'amp-audio' | 'amp-auto-ads' | 'amp-autocomplete' | 'amp-base-carousel' | 'amp-beopinion' | 'amp-bind' | 'amp-bodymovin-animation' | 'amp-brid-player' | 'amp-brightcove' | 'amp-byside-content' | 'amp-call-tracking' | 'amp-carousel' | 'amp-connatix-player' | 'amp-consent' | 'amp-dailymotion' | 'amp-date-countdown' | 'amp-date-display' | 'amp-date-picker' | 'amp-delight-player' | 'amp-dynamic-css-classes' | 'amp-embedly-card' | 'amp-experiment' | 'amp-facebook-comments' | 'amp-facebook-like' | 'amp-facebook-page' | 'amp-facebook' | 'amp-fit-text' | 'amp-font' | 'amp-form' | 'amp-fx-collection' | 'amp-fx-flying-carpet' | 'amp-geo' | 'amp-gfycat' | 'amp-gist' | 'amp-google-document-embed' | 'amp-google-vrview-image' | 'amp-hulu' | 'amp-iframe' | 'amp-ima-video' | 'amp-image-lightbox' | 'amp-image-slider' | 'amp-img' | 'amp-imgur' | 'amp-inputmask' | 'amp-instagram' | 'amp-install-serviceworker' | 'amp-izlesene' | 'amp-jwplayer' | 'amp-kaltura-player' | 'amp-lightbox-gallery' | 'amp-lightbox' | 'amp-link-rewriter' | 'amp-list' | 'amp-live-list' | 'amp-mathml' | 'amp-megaphone' | 'amp-minute-media-player' | 'amp-mowplayer' | 'amp-mustache' | 'amp-next-page' | 'amp-nexxtv-player' | 'amp-o2-player' | 'amp-ooyala-player' | 'amp-orientation-observer' | 'amp-pan-zoom' | 'amp-pinterest' | 'amp-pixel' | 'amp-playbuzz' | 'amp-position-observer' | 'amp-powr-player' | 'amp-reach-player' | 'amp-recaptcha-input' | 'amp-reddit' | 'amp-riddle-quiz' | 'amp-script' | 'amp-selector' | 'amp-share-tracking' | 'amp-sidebar' | 'amp-skimlinks' | 'amp-smartlinks' | 'amp-social-share' | 'amp-soundcloud' | 'amp-springboard-player' | 'amp-sticky-ad' | 'amp-story-auto-ads' | 'amp-story-bookend' | 'amp-story-cta-layer' | 'amp-story-grid-layer' | 'amp-story-page-attachment' | 'amp-story-page' | 'amp-story' | 'amp-subscriptions-google' | 'amp-subscriptions' | 'amp-timeago' | 'amp-truncate-text' | 'amp-twitter' | 'amp-user-location' | 'amp-user-notification' | 'amp-video-docking' | 'amp-video-iframe' | 'amp-video' | 'amp-vimeo' | 'amp-vine' | 'amp-viqeo-player' | 'amp-viz-vega' | 'amp-vk' | 'amp-web-push' | 'amp-wistia-player' | 'amp-yotpo' | 'amp-youtube' | 'amp-3d-gltf' | 'amp-3q-player' | 'amp-access-laterpay' | 'amp-access-poool' | 'amp-access' | 'amp-accordion' | 'amp-action-macro' | 'amp-ad-exit' | 'amp-ad' | 'amp-addthis' | 'amp-analytics' | 'amp-anim' | 'amp-animation' | 'amp-apester-media' | 'amp-app-banner' | 'amp-audio' | 'amp-auto-ads' | 'amp-autocomplete' | 'amp-base-carousel' | 'amp-beopinion' | 'amp-bind' | 'amp-bodymovin-animation' | 'amp-brid-player' | 'amp-brightcove' | 'amp-byside-content' | 'amp-call-tracking' | 'amp-carousel' | 'amp-connatix-player' | 'amp-consent' | 'amp-dailymotion' | 'amp-date-countdown' | 'amp-date-display' | 'amp-date-picker' | 'amp-delight-player' | 'amp-dynamic-css-classes' | 'amp-embedly-card' | 'amp-experiment' | 'amp-facebook-comments' | 'amp-facebook-like' | 'amp-facebook-page' | 'amp-facebook' | 'amp-fit-text' | 'amp-font' | 'amp-form' | 'amp-fx-collection' | 'amp-fx-flying-carpet' | 'amp-geo' | 'amp-gfycat' | 'amp-gist' | 'amp-google-document-embed' | 'amp-google-vrview-image' | 'amp-hulu' | 'amp-iframe' | 'amp-ima-video' | 'amp-image-lightbox' | 'amp-image-slider' | 'amp-img' | 'amp-imgur' | 'amp-inputmask' | 'amp-instagram' | 'amp-install-serviceworker' | 'amp-izlesene' | 'amp-jwplayer' | 'amp-kaltura-player' | 'amp-lightbox-gallery' | 'amp-lightbox' | 'amp-link-rewriter' | 'amp-list' | 'amp-live-list' | 'amp-mathml' | 'amp-megaphone' | 'amp-minute-media-player' | 'amp-mowplayer' | 'amp-mustache' | 'amp-next-page' | 'amp-nexxtv-player' | 'amp-o2-player' | 'amp-ooyala-player' | 'amp-orientation-observer' | 'amp-pan-zoom' | 'amp-pinterest' | 'amp-pixel' | 'amp-playbuzz' | 'amp-position-observer' | 'amp-powr-player' | 'amp-reach-player' | 'amp-recaptcha-input' | 'amp-reddit' | 'amp-riddle-quiz' | 'amp-script' | 'amp-selector' | 'amp-share-tracking' | 'amp-sidebar' | 'amp-skimlinks' | 'amp-smartlinks' | 'amp-social-share' | 'amp-soundcloud' | 'amp-springboard-player' | 'amp-sticky-ad' | 'amp-story-auto-ads' | 'amp-story-bookend' | 'amp-story-cta-layer' | 'amp-story-grid-layer' | 'amp-story-page-attachment' | 'amp-story-page' | 'amp-story' | 'amp-subscriptions-google' | 'amp-subscriptions' | 'amp-timeago' | 'amp-truncate-text' | 'amp-twitter' | 'amp-user-location' | 'amp-user-notification' | 'amp-video-docking' | 'amp-video-iframe' | 'amp-video' | 'amp-vimeo' | 'amp-vine' | 'amp-viqeo-player' | 'amp-viz-vega' | 'amp-vk' | 'amp-web-push' | 'amp-wistia-player' | 'amp-yotpo' | 'amp-youtube'

    type IntrinsicElements = {
      [tag in (keyof ElementTagNameMap) | AmpElementTagType ]: AttributesType | {}
    }
  }
}

const renderAttributes = (attr: JSX.AttributesType): string => (
  Object
    .entries(attr)
    .map(([key, value]) => typeof value === 'boolean' ? key : `${key}="${value.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"`)
    .join(' ')
)

const renderInnerHTMLs = (innerHTMLs: (number | string | boolean)[]): string => (
  innerHTMLs.map(
    (innerHTML = '') => (
      Array.isArray(innerHTML)
        ? innerHTML.map(html => html.toString()).join('')
        : innerHTML.toString()
    )
  ).join('')
)

export const pragma = (tagName: string, attributes: JSX.AttributesType, ...innerHTMLs: (number | string | boolean)[]): string =>
  `<${tagName}${attributes ? ` ${renderAttributes(attributes)}` : ''}>${renderInnerHTMLs(innerHTMLs)}</${tagName}>`
