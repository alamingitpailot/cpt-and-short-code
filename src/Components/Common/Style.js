// import { getBackgroundCSS, getBorderCSS, getColorsCSS, getIconCSS, getSeparatorCSS, getMultiShadowCSS, getSpaceCSS, getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { columnGap, rowGap, alignment, textAlign, width, background, typography, color, colors, icon, separator, padding, margin, border, shadow } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBlockName`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
	`}} />;
}
export default Style;