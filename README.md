# ๐บ react-kakao-map

- ์นด์นด์ค๋งต api ๋ฅผ ์ด์ฉํ ์ง๋ ๊ตฌํ

## Stacks

- <img src="https://img.shields.io/badge/React-61DAFB?style=flatgit&logo=React&logoColor=white"/>

## Features

- useContext ๋ฅผ ์ฌ์ฉํ์ฌ ์ง๋ ์ํ ์ ์ญ ๊ด๋ฆฌ
- ํค์๋๋ฅผ ํตํด ์ฅ์ ๊ฒ์ ๊ตฌํ
- ๊ฒ์ ๊ฒฐ๊ณผ ์ง๋์ ๋ง์ปค๋ก ํ์
- ๋ง์ปค ํด๋ฆญ ์
  - ์ง๋ ํ๋ฉด ์ค์ฌ์ขํ๋ก ์ด๋
  - ์ค๋ฒ๋ ์ด๋ฅผ ํตํด ํด๋น ์ฅ์ ๊ธฐ๋ณธ ์ ๋ณด ํ์
- ์ง๋ ์ค ์ธ/์์ ๊ตฌํ
- ์ง๋ ํ์ ๋ณ๊ฒฝ (์์ ๊ฑฐ ๋๋ก, ๊ตํต์ ๋ณด, ์งํ๋) ๊ตฌํ
- mkcert ๋ฅผ ์ด์ฉํด https ์ค์ 

  - Localhost โhttp -> httpsโ ๋ก ๋ณ๊ฒฝํ๋ ๋ฐฉ๋ฒ

    1. ์ค์น<br/>

    ```
    brew install mkcert
    brew install css (only needed firefox)
    ```

    2. ํ๋ก์ ํธ ์ต์๋จ์์

    ```
    mkcert -install
    ```

    3. ์ธ์ฆ์ ํด๋ ๋ฐ ํ์ผ ์์ฑ (.gitignore ์ถ๊ฐํ  ๊ฒ)

    ```
    mkdir -p .cert
    Mkcert -key-file ./.cert/key.pem -cert-file ./.cert-cert.pem โlocalhostโ
    ```

    5. package.json -> โscriptsโ ์์ 

    ```
    "start": "HTTPS=true SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem react-scripts start",
    ```

- ์์น ํ์ฉ ์ geolocation API ๋ฅผ ์ด์ฉํ์ฌ ํ์ฌ ์์น ๊ธฐ์ค์ผ๋ก ์ง๋ ์ค์ฌ์ขํ ์ค์ 
- ์ง๋ ๋ถ๋ฌ์ฌ ๋์ ๋ก๋ฉ ์คํผ๋ ๋์
- localstorage ๋ฅผ ์ด์ฉํด ์ต๊ทผ ๊ฒ์์ด ๊ตฌํ
  - ์ถ๊ฐ, ์ญ์  ๊ฐ๋ฅ
  - ๊ฒ์์ด ํด๋ฆญ ์ ๊ฒ์ ๊ฒฐ๊ณผ ์ง๋์ ๋์
- ๊ฒ์ ํผ ํด๋ฆญ ์ ์ต๊ทผ ๊ฒ์์ด show , ํผ ์ ์ธํ ๋ค๋ฅธ ๊ณณ ํด๋ฆญ ์ hide

## Demo

- <a href='https://papaya-blini-8214bc.netlify.app/'>๐ ๋งํฌ</a>
