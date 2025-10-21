        const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMsg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;
            successMsg.textContent = '';

            const fields = ['name', 'email', 'subject', 'message'];
            fields.forEach(id => {
                const input = document.getElementById(id);
                const error = document.getElementById('error-' + id);
                error.textContent = '';

                if (!input.value.trim()) {
                    error.textContent = 'This field is required.';
                    valid = false;
                } else if (id === 'email' && !/^[^@]+@[^@]+\.[^@]+$/.test(input.value)) {
                    error.textContent = 'Please enter a valid email address.';
                    valid = false;
                } else if (id === 'message' && input.value.trim().length < 10) {
                    error.textContent = 'Message must be at least 10 characters.';
                    valid = false;
                }
            });

            if (valid) {
                form.reset();
                successMsg.textContent = 'Thank you! Your message has been sent successfully.';
            }
        });