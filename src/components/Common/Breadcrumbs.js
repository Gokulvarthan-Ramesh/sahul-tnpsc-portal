export const Breadcrumbs = (pageName) => {
    const pageLabels = {
        'daily-ca': 'Daily Current Affairs / தினசரி நடப்பு நிகழ்வுகள்',
        'exam-notifications': 'Exam Notifications / தேர்வு அறிவிப்புகள்',
        'important-pdfs': 'Important PDFs / முக்கிய பிடிஎஃப் கோப்புகள்',
        'practice-questions': 'Practice Questions / பயிற்சி வினாக்கள்',
        'free-pdfs': 'Free PDFs / இலவச பிடிஎஃப்கள்',
        'free-notes': 'Free Notes / இலவச குறிப்புகள்',
        'free-pyq': 'Previous Year Questions / முந்தைய ஆண்டு வினாக்கள்',
        'free-tests': 'Free Online Tests / இலவச ஆன்லைன் தேர்வுகள்',
        'success-wall': 'Success Wall / வெற்றிச் சுவர்'
    };

    const currentLabel = pageLabels[pageName] || pageName;

    return `
    <nav class="breadcrumb-nav" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#home">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">${currentLabel}</li>
            </ol>
        </div>
    </nav>
    <style>
        .breadcrumb-nav {
            background: #f8f9fa;
            padding: 15px 0;
            margin-bottom: 30px;
            border-bottom: 1px solid #eee;
        }
        .breadcrumb {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 14px;
        }
        .breadcrumb-item + .breadcrumb-item::before {
            content: "/";
            padding: 0 10px;
            color: #6c757d;
        }
        .breadcrumb-item a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
        }
        .breadcrumb-item a:hover {
            color: var(--primary-alt);
            text-decoration: underline;
        }
        .breadcrumb-item.active {
            color: #6c757d;
        }
    </style>
    `;
};
