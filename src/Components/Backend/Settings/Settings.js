
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { generalStyleTabs } from '../../../utils/options';

const Settings = ({ attributes, setAttributes }) => {
	const { alignment } = attributes;


	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{/* {'general' === tab.name && <>
					<PanelBody className='bPlPanelBody addRemoveItems editItem' title={__('Add or Remove Items', 'textdomain')}>
						<p>Hi111</p>
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Custom Style', 'textdomain')}>
						<p>hi222</p>
					</PanelBody>
				</>} */}
			</>}</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} />

		</BlockControls>
	</>;
};
export default Settings;