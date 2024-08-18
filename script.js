// Font patterns that correspond to different styles
const stylishFonts = [
    text => text.split('').map(char => `ㄚ卂丂卄`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `ﾘﾑ丂ん`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `עคςҺ`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `ча$н`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `УДSH`.charAt('yash'.indexOf(char.toLowerCase())) || char).join('')
];

const mirrorFonts = [
    text => text.split('').reverse().join(''), // Mirror effect
    text => text.split('').reverse().join('') + ' (Mirrored)', // Example mirror font with annotation
];

const gamingFonts = [
    text => text.split('').map(char => `ꐟꋫꌚꑛ`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `ꌩꍏꌗꃅ`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `ψαšh`.charAt('yash'.indexOf(char.toLowerCase())) || char).join(''),
    text => text.split('').map(char => `¥ΔŞĦ`.charAt('yash'.indexOf(char.toLowerCase())) || char).join('')
];

const glitchyFonts = [
    text => `𝘺𝘢𝘴𝘩`.replace('yash', text),
    text => `𝙮𝙖𝙨𝙝`.replace('yash', text),
    text => `𝚢𝚊𝚜𝚑`.replace('yash', text),
    text => `🆈🅰🆂🅷`.replace('yash', text)
];

const symbolicFonts = [
    text => `ⓨⓐⓢⓗ`.replace('yash', text),
    text => `🅈🄰🅂🄷`.replace('yash', text),
    text => `Ƴᗩᔕᕼ`.replace('yash', text),
    text => `ｙａｓｈ`.replace('yash', text)
];

function generateStyles() {
    const inputText = $('#inputText').val();
    const $styledNames = $('#styledNames');
    $styledNames.empty();

    // Add stylish fonts
    stylishFonts.forEach(font => {
        const styledText = font(inputText);
        const $styleElement = createStyledElement(styledText);
        $styledNames.append($styleElement);
    });

    // Add mirror fonts
    mirrorFonts.forEach(font => {
        const styledText = font(inputText);
        const $styleElement = createStyledElement(styledText, 'mirror-font');
        $styledNames.append($styleElement);
    });

    // Add gaming fonts
    gamingFonts.forEach(font => {
        const styledText = font(inputText);
        const $styleElement = createStyledElement(styledText, 'gaming-font');
        $styledNames.append($styleElement);
    });

    // Add glitchy fonts
    glitchyFonts.forEach(font => {
        const styledText = font(inputText);
        const $styleElement = createStyledElement(styledText, 'glitchy-font');
        $styledNames.append($styleElement);
    });

    // Add symbolic fonts
    symbolicFonts.forEach(font => {
        const styledText = font(inputText);
        const $styleElement = createStyledElement(styledText, 'symbolic-font');
        $styledNames.append($styleElement);
    });
}

function createStyledElement(text, additionalClass = '') {
    return $(`
        <div class="styled-name ${additionalClass}">
            <span>${text}</span>
            <button class="copy-btn" onclick="copyText('${text}')">Copy</button>
        </div>
    `);
}

function copyText(text) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Copied: ${text}`);
}
