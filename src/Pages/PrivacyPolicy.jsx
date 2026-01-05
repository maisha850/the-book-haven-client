const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-10">
          How The Book Haven collects, uses, and protects your information
        </p>

        <div className="space-y-4">

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="radio" name="privacy" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              Introduction
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-200">
              <p>
                The Book Haven respects your privacy. This policy explains how
                we handle your personal data while using our e-library platform.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="radio" name="privacy" />
            <div className="collapse-title text-lg font-semibold">
              Information We Collect
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-200">
              <p>
                We collect name, email, profile photo, and reading activity to
                improve your experience.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="radio" name="privacy" />
            <div className="collapse-title text-lg font-semibold">
              How We Use Your Data
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-200">
              <p>
                Your data helps personalize book recommendations and maintain
                secure user accounts.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="radio" name="privacy" />
            <div className="collapse-title text-lg font-semibold">
              Data Security
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-200">
              <p>
                We use modern security practices to protect your information
                from unauthorized access.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="radio" name="privacy" />
            <div className="collapse-title text-lg font-semibold">
              Your Rights
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-200">
              <p>
                You may update or delete your profile information at any time
                through your account dashboard.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
