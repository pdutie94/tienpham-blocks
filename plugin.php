<?php
/**
 * Plugin Name: TienPham Blocks
 * Plugin URI: https://tienpham.xyz/tienpham-blocks
 * Description: Blocks for TienPham theme
 * Author: TienPham
 * Author URI: https://tienpham.xyz/
 */

if( ! defined( 'ABSPATH' ) ) {
    exit;
}

function tienpham_blocks_regitser_block_type($block, $options = array()) {
    register_block_type(
        'tienpham-blocks/' . $block,
        array_merge(
            array(
                'editor_script' => 'tienpham-blocks-editor-script',
                'editor_style'  => 'tienpham-blocks-editor-style',
                'script'        => 'tienpham-blocks-script',
                'style'         => 'tienpham-blocks-style',
            ),
            $options
        )
    );
}

function tienpham_blocks_register() {

    wp_register_script( 
        'tienpham-blocks-editor-script', 
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'wp-api-fetch')
    );
    wp_register_script( 
        'tienpham-blocks-script', 
        plugins_url('dist/script.js', __FILE__),
        array('jquery')
    );

    wp_register_style( 
        'tienpham-blocks-editor-style', 
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );
    wp_register_style( 
        'tienpham-blocks-style', 
        plugins_url('dist/style.css', __FILE__)
    );
    tienpham_blocks_regitser_block_type('recent-authors');
}

add_action('init', 'tienpham_blocks_register');