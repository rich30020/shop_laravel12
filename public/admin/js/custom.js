$(document).ready(function() {
    //✔ Check Admin Password is correct or not
    $("#current_pwd").keyup(function() {
        var current_pwd = $("#current_pwd").val();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/admin/verify-password',
            data: { current_pwd: current_pwd },
            success: function(resp) {
                if (resp == "false") {
                    $("#verifyPwd").html("<font color='red'>Current Password is incorrect</font>");
                } else if (resp == "true") {
                    $("#verifyPwd").html("<font color='green'>Current Password is correct</font>");
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", status, error);
                alert("An error occurred while verifying the password.");
            }
        });
    });

    $(document).on('click', '#deleteProfileImage', function() {
        if (confirm('Are you sure you want to remove your Profile Image?')) {
            var admin_id = $(this).data('admin-id');
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type:'post',
                url:'delete-profile-image',
                data:{admin_id:admin_id},
                success:function(resp){
                    if(resp['status'] == true){
                        alert(resp['message']);
                        $('#profileImageBlock').remove();
                    }
                },error:function() {
                    alert("Error occurred while deleting the image")
                }
            })
        }
    })
});
