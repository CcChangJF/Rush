
import cv2 as cv
import numpy as np


# The bins
N = 16


def color_detect_k_means(image_name):
    """Detect the color of a car
    @:param
    image_name: the image path that is going to be dealt
    @:return
    The image that was dealt by k-means
    """

    image = cv.imread(image_name, cv.IMREAD_COLOR)
    # cv.imshow('Origin image', image)

    # convert to 3 channels
    Z = image.reshape((-1, 3))

    # convert to float32
    Z = np.float32(Z)

    # define the criteria, k, and apply k-means
    criteria = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 10, 1)
    k = 2
    ret, label, center = cv.kmeans(Z, k, None, criteria, 10, cv.KMEANS_RANDOM_CENTERS)

    # convert it back to the original image size with the cluster color.
    center = np.uint8(center)
    res = center[label.flatten()]
    res2 = res.reshape(image.shape)

    return res2


def color_detect(image):
    """color detect use statistic
    @:param
    image: The image matrix
    @:return
    color: The dominate color of the image
    """

    #  The count is used for statistic of the colors
    count = list()
    for i in range(N + 1):
        sub_count = list()
        for j in range(N + 1):
            sub_count.append([0] * (N + 1))
        count.append(sub_count.copy())

    height, width, _ = image.shape
    # ratio is used to map the color to the bins
    ratio = 256 // N

    for row in range(height):
        for col in range(width):
            color = image[row, col]
            count[color[0] // ratio][color[1] // ratio][color[2] // ratio] += 1

    # Get the most frequent color
    max_value = 0
    max_index = ()
    for i in range(N):
        for j in range(N):
            for k in range(N):
                if count[i][j][k] > max_value:
                    max_index = (i, j, k)
                    max_value = count[i][j][k]

    return (max_index[0] * ratio, max_index[1] * ratio, max_index[2] * ratio)


if __name__ == "__main__":

    images = ['../images/0026.JPEG',
              '../images/0032.JPEG',
              '../images/0040.JPEG',
              '../images/0071.JPEG',
              '../images/0125.JPEG']

    # image_name = sys.argv[1] if (len(sys.argv) > 1) else '../images/0026.JPEG'

    for image_name in images:
        image = color_detect_k_means(image_name)
        color = color_detect(image)
        print(color)
