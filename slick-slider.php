<?php
/*
Plugin Name: Slick Slider
Description: Awesome slider to intregreate to your site
Author: bPlugins
Version: 1.0.0
Author URI: https://bplugins.com
*/

define( 'SSLIDER_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'SSLIDER_DIR_URL', plugin_dir_url( __FILE__ ) );

add_action( 'init', 'sSlideInit' );
add_action( 'wp_enqueue_scripts', 'sSlideEnqueueScripts' );
// add_shortcode( 'member', 'sSlideMember' );
add_shortcode( 'slick_slider', 'sSlideShortcode' );
add_filter( 'manage_slick-slider_posts_columns', 'sSlideManageColumns', 10 );
add_action( 'manage_slick-slider_posts_custom_column', 'sSlideManageCustomColumns', 10, 2 );

function sSlideInit(){
    register_block_type( __DIR__ . '/build' );
    
    register_post_type( 'slick-slider', [
        'label' => 'Slick Slider',
        'labels' => [
            'add_new' => 'Add New Slider', // Global page
            'add_new_item' => 'Add New Slider', // When click on new post
            'edit_item' => 'Edit Slider',
            'not_found' => 'There is no slider please add one'
        ],
        'show_in_rest' => true,
        'public' => true,
        'template'				=> [ ['slick/slider'] ],
		'template_lock'			=> 'all',
    ] );
}

function sSlideEnqueueScripts(){
    wp_register_style( 'slick', SSLIDER_DIR_URL . 'public/css/slick.css', [], '1.8.1',  );
    wp_register_style( 'slick-theme', SSLIDER_DIR_URL . 'public/css/slick-theme.css', [], '1.8.1',  );
    
    wp_register_script( 'slick', SSLIDER_DIR_URL . 'public/js/slick.min.js', [ 'jquery' ], '1.8.1',  );
}

function sSlideMember( $attributes ){
    ob_start(); ?>
        <div class='bio'>
            <h2><?php echo $attributes['name'];?></h2>
            <p><?php echo $attributes['age'];?></p>
            <img src="<?php echo $attributes['photo'];?>" />
        </div>
    <? return ob_get_clean();
}

function sSlideShortcode( $attributes ){
    $postID = $attributes['id'];
    $post = get_post( $postID );
    $blocks = parse_blocks( $post->post_content );

    ob_start();
    echo render_block( $blocks[0] );

    return ob_get_clean();
}

function sSlideManageColumns( $defaults ) {
    unset( $defaults['date'] );
    $defaults['shortcode'] = 'ShortCode';
    $defaults['date'] = 'Date';
    return $defaults;
}

function sSlideManageCustomColumns( $column_name, $post_ID ) {
    if ( $column_name == 'shortcode' ) {
        echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_ID ) . '">
            <input value="[slick_slider id=' . esc_attr( $post_ID ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr( $post_ID ) . '\')">
            <span class="tooltip">' . esc_html__( 'Copy To Clipboard' ) . '</span>
        </div>';
    }
}

// add_action( 'init', function(){
//     register_post_type( 'slick-slider', [
//         'label' => 'Slick Slider',
//         'labels' => [
//             'add_new' => 'Add New Slider', // Global page
//             'add_new_item' => 'Add New Slider', // When click on new post
//             'edit_item' => 'Edit Slider',
//             'not_found' => 'There is no slider please add one'
//         ],
//         'public' => true
//     ] );
// } );