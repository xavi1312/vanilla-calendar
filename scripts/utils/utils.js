/**
 *
 * @param {string} nodeName
 * @param {object} attrs
 * @param  {...HTMLElement|string|number} children
 * @returns HTMLElement
 */
function h (nodeName, attrs, ...children) {
  const $el = document.createElement(nodeName)

  for (const key in attrs) {
    $el.setAttribute(key, attrs[key])
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      $el.appendChild(document.createTextNode(child))
      return
    }

    const covertedChild = typeof child === 'number' ? `${child}` : child

    $el.append(covertedChild)
  })

  return $el
}

export {
  h
}
