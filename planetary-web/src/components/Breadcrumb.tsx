import { For, type Component } from 'solid-js'
import { useLocation } from '@solidjs/router'
import { A } from '@solidjs/router'
import { ChevronRight } from 'lucide-solid'
import { SITE_URL, ROUTES } from '../lib/site-config'

const HOME_BREADCRUMB_TITLE = 'Top'

const getBreadcrumb = (path: string): { path: string; title: string }[] => {
  if (path === '/' || path === '') return [{ path: '/', title: HOME_BREADCRUMB_TITLE }]
  const route = ROUTES.find((r) => r.path === path || path.startsWith(r.path + '/'))
  if (!route) return [{ path: '/', title: HOME_BREADCRUMB_TITLE }, { path, title: path }]
  if (route.path === path) return [{ path: '/', title: HOME_BREADCRUMB_TITLE }, { path: route.path, title: route.title }]
  const parts = path.split('/').filter(Boolean)
  const items: { path: string; title: string }[] = [{ path: '/', title: HOME_BREADCRUMB_TITLE }]
  let acc = ''
  for (const p of parts) {
    acc += '/' + p
    const r = ROUTES.find((x) => x.path === acc)
    items.push({ path: acc, title: r?.title ?? p })
  }
  return items
}

export const Breadcrumb: Component = () => {
  const location = useLocation()
  const items = () => getBreadcrumb(location.pathname)

  const jsonLd = () => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items().map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.title,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  })

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd())}</script>
      <nav aria-label="Breadcrumb" class="mb-4 flex items-center gap-1 text-sm text-stone-500">
        <ol class="flex flex-wrap items-center gap-1">
          <For each={items()}>
            {(item, i) => (
              <li class="flex items-center gap-1">
                {i() > 0 && <ChevronRight size={14} class="shrink-0 text-stone-300" />}
                {i() < items().length - 1 ? (
                  <A href={item.path} class="hover:text-amber-600">
                    {item.title}
                  </A>
                ) : (
                  <span class="text-stone-600">{item.title}</span>
                )}
              </li>
            )}
          </For>
        </ol>
      </nav>
    </>
  )
}
