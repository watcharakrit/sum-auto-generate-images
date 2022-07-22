import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import globalStyles from 'styles/global-styles'
import 'sanitize.css'
import colors from 'styles/colors'

import InputImageFileToCanvas from 'components/InputImageFileToCanvas'

function App() {
  const theme = { colors }
  const [imageFiles, setImageFiles] = useState<File[]>([])

  return (
    <ThemeProvider theme={theme}>
      <ContainerStyled>
        <Content>
          <ScrollPage>
            <Container>
              <GlobalStyle />
              <AppVersion>
                <p>v{process.env.REACT_APP_VERSION}</p>
              </AppVersion>
              <Title style={{ marginBottom: '-10px' }}>SUM Auto Generate Images</Title>
              <p>
                The image can define the color label by add prefix name follow options.
                <br />( "red_", "blue", "yellow_", "black_" and empty is default color "white" )
              </p>
              <input type="file" accept="image/png, image/gif, image/jpeg" multiple onChange={handleFileInput} />

              <PreviewImages>
                {imageFiles.map((image, i) => {
                  return <InputImageFileToCanvas key={i} imageFile={image} />
                })}
              </PreviewImages>
            </Container>
          </ScrollPage>
        </Content>
      </ContainerStyled>
    </ThemeProvider>
  )

  function handleFileInput(e) {
    const imageFiles: File[] = []
    const files = e.target.files
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        imageFiles.push(files[i])
      }
    }
    setImageFiles(imageFiles)
  }
}

export default App

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

const ContainerStyled = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Content = styled.div`
  flex: 1;
  padding-bottom: 48px;
`

const ScrollPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: inherit;

  ${(props) =>
    props.flexColumn
      ? `
    display: flex;
    flex-direction: column;
    `
      : ''}
`

const Container = styled.div`
  color: white;
  padding: 0 30px;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 30px;
`

const PreviewImages = styled.div``

const AppVersion = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`
