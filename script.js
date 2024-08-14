const stylishFonts = [
    'ㄚ卂丂卄',
    'ﾘﾑ丂ん',
    'עคςҺ',
    'ча$н',
    'УДSH',
];

const mirrorFonts = [
    'ɥsɐʎ',
    'ʎɐsɥ',
    'Luni Tools Mirror',
    'ʜꙅɒʏ',
];

const gamingFonts = [
    'ꐟꋫꌚꑛ',
    'ꌩꍏꌗꃅ',
    'ψαšh',
    '¥ΔŞĦ',
];

const glitchyFonts = [
    '𝘺𝘢𝘴𝘩',
    '𝙮𝙖𝙨𝙝',
    '𝚢𝚊𝚜𝚑',
    '🆈🅰🆂🅷',
];

const symbolicFonts = [
    'ⓨⓐⓢⓗ',
    '🅈🄰🅂🄷',
    'Ƴᗩᔕᕼ',
    'ｙａｓｈ',
];

function generateStyles() {
    const inputText = $('#inputText').val();
    const $styledNames = $('#styledNames');
    $styledNames.empty();

    // Add stylish fonts
    stylishFonts.forEach(font => {
        const $styleElement = createStyledElement(font);
        $styledNames.append($styleElement);
    });

    // Add mirror fonts
    mirrorFonts.forEach(font => {
        const $styleElement = createStyledElement(font, 'mirror-font');
        $styledNames.append($styleElement);
    });

    // Add gaming fonts
    gamingFonts.forEach(font => {
        const $styleElement = createStyledElement(font, 'gaming-font');
        $styledNames.append($styleElement);
    });

    // Add glitchy fonts
    glitchyFonts.forEach(font => {
        const $styleElement = createStyledElement(font, 'glitchy-font');
        $styledNames.append($styleElement);
    });

    // Add symbolic fonts
    symbolicFonts.forEach(font => {
        const $styleElement = createStyledElement(font, 'symbolic-font');
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
