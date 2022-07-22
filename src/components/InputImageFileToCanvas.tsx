import React, { useEffect, useRef, useState } from 'react'
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

enum LayoutTypeEnum {
  vertical = 'vertical',
  herizontal = 'herizontal',
}

const InputImageFileToCanvas: React.FC<InputImageFileToCanvasProps> = ({ imageFile }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [renderedImage, setRenderedImage] = useState('')

  useEffect(() => {
    var reader = new FileReader()
    reader.onload = function (event) {
      var img = new Image()
      img.onload = function () {
        if (canvasRef.current) {
          const c = canvasRef.current
          const isVertical = img.height >= img.width
          const offsetLeftBlackSpace = isVertical ? 80 : 0
          const imgDimension = getDimensionImageByLayoutType(
            isVertical ? LayoutTypeEnum.vertical : LayoutTypeEnum.herizontal,
            img.width,
            img.height,
            isVertical ? offsetLeftBlackSpace : 0
          )
          c.width = imgDimension.areaWidth
          c.height = imgDimension.areaHeight
          const ctx = c.getContext('2d')
          if (ctx) {
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, offsetLeftBlackSpace, img.height)
            ctx.drawImage(
              img,
              offsetLeftBlackSpace,
              isVertical ? getYAdjustmentToAlignCenterOfHeight(imgDimension.areaHeight, imgDimension.imgHeight) : 0,
              imgDimension.imgWidth,
              imgDimension.imgHeight
            )
            ctx.globalCompositeOperation = 'soft-light'
            ctx.globalAlpha = 0.5
            ctx.drawImage(
              img,
              offsetLeftBlackSpace,
              isVertical ? getYAdjustmentToAlignCenterOfHeight(imgDimension.areaHeight, imgDimension.imgHeight) : 0,
              imgDimension.imgWidth,
              imgDimension.imgHeight
            )
            ctx.globalCompositeOperation = 'source-over'
            ctx.globalAlpha = 1
            const color = getColorFromImageName(imageFile.name)
            ctxAddSumLogoByColor(ctx, color, imgDimension.areaWidth, imgDimension.areaHeight, () => {
              setRenderedImage(c.toDataURL('image/png'))
            })
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

  const imgNameToDownload = imageFile.name.split('.')[0]

  return (
    <ImageContainer>
      <canvas style={{ display: 'none' }} ref={canvasRef} />
      {renderedImage && <img alt={imgNameToDownload} src={renderedImage} />}
    </ImageContainer>
  )

  function getYAdjustmentToAlignCenterOfHeight(areaHeight: number, imgHeight: number): number {
    return (areaHeight - imgHeight) / 2
  }

  function getDimensionImageByLayoutType(
    layoutType: LayoutTypeEnum,
    imgWidth: number,
    imgHeight: number,
    offsetWidth: number
  ): { areaWidth: number; areaHeight: number; imgWidth: number; imgHeight: number } {
    let w: number, h: number, imgRatio: number
    switch (layoutType) {
      case LayoutTypeEnum.vertical:
        w = 720
        h = 900
        imgRatio = imgHeight / imgWidth
        return { areaWidth: w, areaHeight: h, imgWidth: w - offsetWidth, imgHeight: (w - offsetWidth) * imgRatio }
      case LayoutTypeEnum.herizontal:
      default:
        w = 1280
        h = 720
        imgRatio = imgWidth / imgHeight
        return { areaWidth: w, areaHeight: h, imgWidth: h * imgRatio, imgHeight: h }
    }
  }

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

  function ctxAddSumLogoByColor(
    ctx: CanvasRenderingContext2D,
    color: string,
    imgWidth: number,
    imgHeight: number,
    onCompleted: () => void
  ) {
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
      ctx.drawImage(img, startImgX, startImgY, labelWidth, labelHeight)
      onCompleted()
    }
    img.src = imgColor
  }
}

export default InputImageFileToCanvas

const ImageContainer = styled.div`
  padding: 30px 0;
`
