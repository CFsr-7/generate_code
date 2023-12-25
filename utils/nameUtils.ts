/*
* 生成名称
* */
const generateRandomName = (existingNames: Set<string>): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const nameLength = 6; // 假设名称长度为6

    while (true) {
        let randomName = '';
        for (let i = 0; i < nameLength; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            randomName += alphabet[randomIndex];
        }

        if (!existingNames.has(randomName)) {
            existingNames.add(randomName);
            console.log(randomName,'随机名称')
            return `_${randomName}`;
        }
    }
}

export {
    generateRandomName,
}
