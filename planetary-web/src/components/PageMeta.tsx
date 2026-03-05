import { createEffect, type Component } from 'solid-js'
import { useLocation } from '@solidjs/router'
import { SITE_URL, ROUTES } from '../lib/site-config'

const SITE_TITLE = 'Planetary Hello World — Ø Super Singularity Genesis'

export const PageMeta: Component = () => {
  const location = useLocation()

  createEffect(() => {
    const path = location.pathname
    const route = ROUTES.find((r) => r.path === path)
    const title = route ? `${route.title} | ${SITE_TITLE}` : SITE_TITLE
    document.title = title

    const canonical = `${SITE_URL}${path === '/' ? '' : path}`
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  })

  return null
}
