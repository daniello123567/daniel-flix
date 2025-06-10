import React from 'react'
import './globals.css'
function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <head>
        <title>DANIELFLIX</title>
         <link rel="shortcut icon" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCWOA1ZGywLbqmigxE4Qlvuw&psig=AOvVaw3otanW2LtNTJnvJC5E_qEi&ust=1749672323084000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi50rzT540DFQAAAAAdAAAAABAE" type="image/x-icon" />
      </head>
      <body>
      {children}
      </body>
      </html>
  )
}

export default RootLayout
