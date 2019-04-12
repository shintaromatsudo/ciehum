import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-138152142-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-138152142-1');
</script>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300|Noto+Sans+JP:300"
            rel="stylesheet"
          />
          <style>{`
            body {
              font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体, Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック, MSPGothic, sans-serif;              
              margin: 0;
            }
            h2 {
              margin: 0;
              padding: 10px;
              text-align: center;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
