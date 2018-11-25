import serialize from 'serialize-javascript'

const Html = ({ body, title, props }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <script src="/app.js" defer></script>
      <script>window.__INITIAL_DATA__ = ${serialize(props)}</script>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`

export default Html
