import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
          <div className="prose prose-blue">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the services provided by DriveRight Academy, you agree to be bound by these Terms and Conditions.</p>

            <h2>2. Services</h2>
            <p>DriveRight Academy provides driving instruction services. The specific details of each course will be provided at the time of enrollment.</p>

            <h2>3. Payment and Refunds</h2>
            <p>Payment is required at the time of booking. Refunds are available up to 48 hours before the scheduled lesson. After that time, norefunds will be issued except in extenuating circumstances, at the discretion of DriveRight Academy.</p>

            <h2>4. Cancellations and Rescheduling</h2>
            <p>Lessons may be rescheduled up to 24 hours in advance without penalty. Cancellations or rescheduling with less than 24 hours notice may result in a cancellation fee.</p>

            <h2>5. Student Responsibilities</h2>
            <p>Students are expected to arrive on time for lessons, bring all required documentation, and follow the instructor's guidance during lessons.</p>

            <h2>6. Safety and Conduct</h2>
            <p>DriveRight Academy reserves the right to terminate a lesson at any time if the instructor believes the student's conduct is unsafe or inappropriate. No refund will be issued in such cases.</p>

            <h2>7. Privacy Policy</h2>
            <p>We respect your privacy and protect your personal information. Please refer to our separate Privacy Policy for details on how we collect, use, and protect your data.</p>

            <h2>8. Limitation of Liability</h2>
            <p>DriveRight Academy is not liable for any damages or injuries that may occur during driving lessons. Students participate at their own risk.</p>

            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website.</p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at info@driverightacademy.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;