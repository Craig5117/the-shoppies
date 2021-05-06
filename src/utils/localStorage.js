export const loadNominations = () => {
    try {
        const loadedNominations = localStorage.getItem('nominations');
        if (loadedNominations === null) {
            return [];
        }
        return JSON.parse(loadedNominations);
    } catch (err) {
        console.error(err);
        return [];
    }
};