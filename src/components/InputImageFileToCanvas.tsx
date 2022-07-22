import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

enum CornerEnum {
  topLeft = 'topLeft',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
}

interface ResultCornerPositionType {
  posX: number
  posY: number
}

interface InputImageFileToCanvasProps {
  imageFile: File
}

const InputImageFileToCanvas: React.FC<InputImageFileToCanvasProps> = ({ imageFile }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    var reader = new FileReader()
    reader.onload = function (event) {
      var img = new Image()
      img.onload = function () {
        if (canvasRef.current) {
          const c = canvasRef.current
          const isVertical = img.height >= img.width
          const offsetLeftBlackSpace = isVertical ? 80 : 0
          c.width = img.width + offsetLeftBlackSpace
          c.height = img.height
          const ctx = c.getContext('2d')
          if (ctx) {
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, offsetLeftBlackSpace, img.height)
            ctx.drawImage(img, offsetLeftBlackSpace, 0)
            ctx.globalCompositeOperation = 'soft-light'
            ctx.globalAlpha = 0.5
            ctx.drawImage(img, offsetLeftBlackSpace, 0)
            ctx.globalCompositeOperation = 'source-over'
            ctx.globalAlpha = 1
            const color = getColorFromImageName(imageFile.name)
            ctxAddSumLogoByColor(ctx, color, img.width, img.height)
          }
        }
      }
      img.src = event.target?.result as string
    }
    reader.readAsDataURL(imageFile)

    return () => {
      reader.onload = null
    }
  }, [imageFile])

  return (
    <ImageContainer>
      <canvas ref={canvasRef} />
    </ImageContainer>
  )

  function getColorFromImageName(imageName: string): string {
    const strArray = imageName.split('_')
    return strArray[0]
  }

  function getStartPositionByCorner(
    corner: CornerEnum,
    areaWidth: number,
    areaHeight: number,
    imgWidth: number,
    imgHeight: number
  ): ResultCornerPositionType {
    let posX = 0
    let posY = 0
    switch (corner) {
      case CornerEnum.topRight:
        posX = areaWidth - imgWidth
        break
      case CornerEnum.bottomLeft:
        posY = areaHeight - imgHeight
        break
      case CornerEnum.bottomRight:
        posX = areaWidth - imgWidth
        posY = areaHeight - imgHeight
        break
    }

    return { posX, posY }
  }

  function ctxAddSumLogoByColor(ctx: CanvasRenderingContext2D, color: string, imgWidth: number, imgHeight: number) {
    const labelWidth = 80
    const labelHeight = 80

    let imgColor = ''
    switch (color) {
      case 'red':
        imgColor = '/images/sum-labels/label-red.png'
        break
      case 'blue':
        imgColor = '/images/sum-labels/label-blue.png'
        break
      case 'yellow':
        imgColor = '/images/sum-labels/label-yellow.png'
        break
      case 'black':
        imgColor = '/images/sum-labels/label-black.png'
        break
      default:
        imgColor = '/images/sum-labels/label-white.png'
    }

    const posImg = getStartPositionByCorner(CornerEnum.bottomLeft, imgWidth, imgHeight, labelWidth, labelHeight)
    const startImgX = posImg.posX
    const startImgY = posImg.posY
    const img = new Image()
    img.onload = function () {
      console.log('img: ', img)
      ctx.drawImage(img, startImgX, startImgY, labelWidth, labelHeight)
    }
    img.src = imgColor
  }
}

export default InputImageFileToCanvas

const ImageContainer = styled.div`
  padding: 30px 0;
`
