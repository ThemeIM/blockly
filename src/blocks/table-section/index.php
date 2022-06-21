<?php
/**
 * Server-side rendering for the table section block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_table_section')) {
    function blockly_register_table_section() {
        if (! function_exists('register_block_type')) {

            register_block_type(
                'blockly/table-section', 
                [
                    'attributes' => [
                        'table_style' => [
                            'type' => 'string',
                            'default' => 'normal' // normal | striped
                        ],
                        'column_names' => [
                            'type' => 'array',
                            'default' => [
                                'Column 1',
                                'Column 2',
                            ],
                        ],
                        'rows' => [
                            'type' => 'array',
                            'default' => [
                                ['Test 1', 'Test 2']
                            ]
                        ],
                    ],
                    'render_callback' => 'blockly_render_table_section',
                ]
            );
        }
    }
}

add_action( 'init', 'blockly_register_table_section' );

//render fornt end alert box 
if(!function_exists('blockly_render_table_section')) {
    function blockly_render_table_section( $attributes ) {
        // attributes
        $table_style = !empty($attributes['table_style']) ? $attributes['table_style'] : '';
        $column_names = !empty($attributes['column_names']) ? $attributes['column_names'] : [];
        $rows = !empty($attributes['rows']) ? $attributes['rows'] : [];

        ob_start();
?>
        <div class="table-area table-responsive <?php echo table_style == 'striped' ? 'style-01' : '' ?>">
            <table class="custom-table">
                <thead>
                    <tr>
                        <?php
                            if (!empty($column_names)) {
                                foreach ($column_names as $column_name) {
                        ?>
                                    <th>
                                        <?php echo esc_html($column_name); ?>
                                    </th>
                        <?php
                                }
                            }
                        ?>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        if (!empty($rows)) {
                            foreach ($rows as $row) {
                    ?>
                                <tr>
                                    <?php
                                        if (!empty($row)) {
                                            foreach ($row as $cell) {
                                    ?>
                                                <td>
                                                    <?php echo esc_html($cell); ?>
                                                </td>
                                    <?php
                                            }
                                        }
                                    ?>
                                </tr>
                    <?php
                            }
                        }
                    ?>
                </tbody>
            </table>
        </div>
<?php
        return ob_get_clean(); 
    }
}
?>
