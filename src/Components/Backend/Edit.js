
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import { InlineMediaUpload } from '../../../../Components';

import { produce } from 'immer';
import Style from '../Common/Style';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const {slides} = attributes;


	const updateSlide = (index,property,value) => {
		const newSlides = produce(slides, draft => {
			draft[index][property] = value;
		});
		setAttributes({slides:newSlides})
	}

	return <>
		{/* <Settings {...{ attributes, setAttributes}} /> */}

		<div {...useBlockProps()}>
			<Style attributes={attributes} id={`block-${clientId}`} />

			{/* <Slider attributes={attributes} /> */}

			<div className='slickSliderSettings'>
				{slides.map((slide,index) => {
					const {image,caption} = slide;

					return <div key={index} className='slideOptions'>
						<label>Image</label>
						<InlineMediaUpload value={image} onChange={val => updateSlide(index,'image', val)} placeholder="Enter Slider Image URL"/>

						<TextControl label="Caption" value={caption} onChange={val => updateSlide(index,'caption', val)} />
					</div>
				})}
			</div>
		</div>
	</>;
}
export default Edit;