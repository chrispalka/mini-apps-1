const server = 'http://127.0.0.1:3000';



const fileUpload = (file) => {
  var formData = new FormData();
  formData.append('file', file);
  $.ajax({
    type: 'POST',
    data: formData,
    url: `${server}/submit`,
    contentType: false,
    processData: false,
    success: () => {
      console.log('Success!')
    }
  }).done(function(res) {
    $('#result-box').html('')
    $('#result-box').append(res.data);
  })
};

$('.form-report').on('submit', function(e) {
  e.preventDefault()
  var form = $('form #file')[0];
  var file = form.files[0]
  fileUpload(file)
});

