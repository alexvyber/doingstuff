const theme = {
	brandColor1: "#f8f8f8",
	brandColor2: "#abcabc",
};

function css(strings, ...values) {
	return strings.reduce((res, str, i) => {
		return res + str + (values[i] ? values[i](theme) : "");
	}, "");
}

const styles = css`
    font-size: 1.2em;
    color: ${(theme) => theme.brandColor2};
  `;
console.log(styles);
// font-size: 1.2em;
// color: #f8f8f8;
