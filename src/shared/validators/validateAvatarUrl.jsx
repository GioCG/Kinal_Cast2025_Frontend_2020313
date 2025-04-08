
export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export const avatarUrlValidatioMessage = 'Esta no es una URL valida';