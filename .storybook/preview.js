import { withScreenshot } from "storycap"

export const decorators = [withScreenshot]

export const parameters = ({
    screenshot: {
        viewport: {
            width: 1920,
            height: 1080,
        },
    },
})
