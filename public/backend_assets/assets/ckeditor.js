var options = {
    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token='+ $('meta[name=csrf-token]').attr("content"),
    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='+ $('meta[name=csrf-token]').attr("content"),
};
CKEDITOR.replace('my-editor-1', options);
CKEDITOR.replace('my-editor-2', options);
