export const validateTitle = (title) => {
    return title.legth>=3 && title.legth <= 30;
}

export const validateTitleMessage = 'El titulo debe tener entre 3 y 30 caracteres';