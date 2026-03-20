// This is your data repository. Add or Edit content here.
const aknoRM_Data = {

    // ==========================================
    // 1. SAFETY (নিরাপত্তামূলক)
    // ==========================================

    'Safety': {
        title: 'নিরাপত্তামূলক ড্রাইভিং নির্দেশিকা',
        text: `
            <strong>১। নিরাপদ ড্রাইভিং এর ১০টি মূলনীতি</strong>
            <ul>
                <strong>ক। মনোযোগী থাকুন:</strong> সর্বদা রাস্তার দিকে মনোযোগ দিন এবং মোবাইল ব্যবহার বা অন্য বিভ্রান্তি এড়িয়ে চলুন।
                <strong>খ। নিরাপদ দূরত্ব বজায় রাখুন:</strong> সামনের গাড়ির সাথে পর্যাপ্ত দূরত্ব রাখুন।
                <strong>গ। অনুমান করুন:</strong> অন্য চালক ভুল করতে পারে—সব সময় প্রস্তুত থাকুন।
                <strong>ঘ। পরিস্থিতি অনুযায়ী চালানো:</strong> আবহাওয়া ও রাস্তার অবস্থা অনুযায়ী গতি ঠিক করুন।
                <strong>ঙ। গতি সীমা:</strong> নির্ধারিত গতি অতিক্রম করবেন না।
                <strong>চ। আয়না ব্যবহার:</strong> নিয়মিত লুকিং গ্লাস দেখে চারপাশ সম্পর্কে সচেতন থাকুন।
                <strong>ছ। ব্লাইন্ড স্পট:</strong> লেন পরিবর্তনের আগে নিজের ব্লাইন্ড স্পট পরীক্ষা করুন।
                <strong>জ। প্রস্তুতি:</strong> অপ্রত্যাশিত পরিস্থিতির জন্য দ্রুত ব্যবস্থা নিতে প্রস্তুত থাকুন।
                <strong>ঝ। ধৈর্য:</strong> রাগ বা প্রতিযোগিতা করে গাড়ি চালাবেন না।
                <strong>ঞ। রক্ষণাবেক্ষণ:</strong> ব্রেক, টায়ার ও লাইট সঠিক আছে কিনা নিশ্চিত করুন।
            </ul>

            <strong>২। যানবাহন দুর্ঘটনার প্রধান কারণসমূহ</strong>
            <strong>ক। চালকের ব্যক্তিগত ও মানবিক কারণ (Human Factors)</strong>
            <ul>
                <li><strong>অসতর্কতা:</strong> অতিরিক্ত গতি, মোবাইল ব্যবহার এবং অমনোযোগ।</li>
                <li><strong>শারীরিক অবস্থা:</strong> ক্লান্তি, ঘুম, বিশ্রামহীনতা বা অসুস্থতা।</li>
                <li><strong>শারীরিক সীমাবদ্ধতা:</strong> দৃষ্টি বা শ্রবণ শক্তির সমস্যা।</li>
                <li><strong>নেশা:</strong> মাদক বা মদ্যপ অবস্থায় গাড়ি চালানো।</li>
                <li><strong>অদক্ষতা:</strong> অপর্যাপ্ত প্রশিক্ষণ এবং ট্রাফিক নিয়ম সম্পর্কে জ্ঞানের অভাব।</li>
            </ul>

            <strong>খ। যান্ত্রিক ও কারিগরি কারণ (Technical Factors)</strong>
            <ul>
                <li><strong>ত্রুটিপূর্ণ যানবাহন:</strong> ব্রেক, টায়ার বা ইঞ্জিনের যান্ত্রিক ত্রুটি।</li>
                <li><strong>নিম্নমান:</strong> নিম্নমানের খুচরা যন্ত্রাংশ বা যানবাহন ব্যবহার।</li>
                <li><strong>লোড:</strong> সক্ষমতার অতিরিক্ত মালামাল বা যাত্রী (অতিরিক্ত লোড) বহন।</li>
                <li><strong>সুরক্ষা:</strong> সিট বেল্ট ব্যবহার না করা।</li>
            </ul>

            <strong>গ। রাস্তা ও পরিবেশগত কারণ (Environmental Factors)</strong>
            <ul>
                <li><strong>আবহাওয়া:</strong> বৃষ্টি, কুয়াশা, ভেজা বা পিচ্ছিল রাস্তা।</li>
                <li><strong>রাস্তার অবস্থা:</strong> দুর্বল অবকাঠামো, নির্মাণাধীন রাস্তা বা পাহাড়ি সরু পথ।</li>
                <li><strong>প্রতিবন্ধকতা:</strong> পথচারী, শিশু বা গবাদি পশুর হঠাৎ রাস্তা পার হওয়া।</li>
                <li><strong>আলোর অভাব:</strong> রাতের অন্ধকার বা রাস্তায় পর্যাপ্ত আলোর অভাব।</li>
                <li><strong>অন্যান্য যানবাহন:</strong> বিপরীত দিক থেকে আসা গাড়ি, রিকশা, ভ্যান বা বাইকের অনাকাঙ্ক্ষিত চলাচল।</li>
            </ul>

            <strong>ঘ। অপারেশনাল কারণ (Operational Factors)</strong>
            <ul>
                <li><strong>কনভয় ডিসিপ্লিন:</strong> কনভয় ধরার জন্য অতিরিক্ত দ্রুত গতিতে গাড়ি চালানো।</li>
                <li><strong>ব্রিফিং:</strong> যাত্রার আগে চালককে রুট বা ঝুঁকি সম্পর্কে পর্যাপ্ত ব্রিফিং না দেওয়া।</li>
                <li><strong>অসতর্ক ওভারটেকিং:</strong> খুব কাছ থেকে বা বাঁকে ওভারটেক করার চেষ্টা করা।</li>
            </ul>
                    
            <strong>৩। দুর্ঘটনা প্রতিরোধে করণীয়</strong>
        <strong>নিরাপদ যাত্রা নিশ্চিত করতে নিচের পদক্ষেপগুলো অনুসরণ করুন:</strong>
        <ul>
            <li><strong>প্রশিক্ষণ:</strong> উন্নতমানের ড্রাইভিং প্রশিক্ষণ নিশ্চিত করা।</li>
            <li><strong>টিম গঠন:</strong> ইউনিট/ফরমেশন পর্যায়ে দুর্ঘটনা প্রতিরোধ টিম গঠন করা।</li>
            <li><strong>ব্রিফিং:</strong> দুর্ঘটনার প্রকৃত কারণ ও শিক্ষা সম্পর্কে সকলকে নিয়মিত ব্রিফিং করা।</li>
            <li><strong>টেস্ট বোর্ড:</strong> স্বচ্ছতার সাথে লাইসেন্স ও ড্রাইভিং টেস্ট বোর্ড গঠন।</li>
            <li><strong>মানসিক সহায়তা:</strong> চালককে অপ্রয়োজনীয় ভয়ভীতি প্রদর্শন না করা।</li>
            <li><strong>যান্ত্রিক পরীক্ষা:</strong> গাড়ি চালানোর আগে সম্পূর্ণ (Daily Inspection) পরীক্ষা করা।</li>
            <li><strong>রাস্তা সম্পর্কে ধারণা:</strong> যাত্রার আগে চালককে রুট বা রাস্তা সম্পর্কে পরিষ্কার ধারণা দেওয়া।</li>
            <li><strong>বিশ্রাম:</strong> ক্লান্ত বা অসুস্থ বোধ করলে অবশ্যই বিশ্রাম নেওয়া।</li>
            <li><strong>লোড নিয়ন্ত্রণ:</strong> গাড়িতে অতিরিক্ত লোড বা যাত্রী না নেওয়া।</li>
            <li><strong>ওভারটেকিং:</strong> বিপদজনক বাঁকে বা সরু রাস্তায় ওভারটেক না করা।</li>
            <li><strong>গতি নিয়ন্ত্রণ:</strong> কনভয় ধরার জন্য বা অন্য কোনো কারণে অতিরিক্ত গতি না তোলা।</li>
            <li><strong>মানসম্মত গাড়ি:</strong> ছুটিতে বা ব্যক্তিগত কাজে নিম্নমানের বা ত্রুটিপূর্ণ গাড়ি ব্যবহার না করা।</li>
            <li><strong>তদন্ত:</strong> যেকোনো দুর্ঘটনার সঠিক কারণ অনুসন্ধানে প্রয়োজনে তদন্ত বোর্ড গঠন করা।</li>
            <li><strong>ট্রাফিক সাইন:</strong> ট্রাফিক নিয়ম ও রোড সাইন সম্পর্কে নিয়মিত প্রশিক্ষণ দেওয়া।</li>
            <li><strong>মোবাইল ফোন:</strong> দীর্ঘ যাত্রায় বা গাড়ি চালানোর সময় মোবাইল ব্যবহার সীমিত/বর্জন করা।</li>
            <li><strong>শৃঙ্খলা:</strong> চালকের মধ্যে পেশাদার শৃঙ্খলা ও কাজের প্রতি উৎসাহ দুটোই বজায় রাখা।</li>
        </ul>
    `,
     youtubeId: 'rHrJkvKEySE' // আপনার ভিডিও আইডি এখানে দিন
    },

    // ==========================================
    // 2. PRE-DRIVE (চালনার পূর্বে)
    // ==========================================
    'PreDrive': {
        title: 'যানবাহন চালনার পূর্বে করণীয় (Pre-driving Duties)',
        text: `
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #1976d2;">
                <strong>১। কর্তব্যে যাওয়ার পূর্বে সম্পাদনীয় কার্যাবলি:</strong>
            </div>
            
            <ul style="line-height: 1.8;">
                <li><strong>ক। কারিগরি পরীক্ষা:</strong> গাড়ি চালানোর আগে সম্পূর্ণরূপে পরীক্ষা করে নিশ্চিত হোন যে কোনো যান্ত্রিক ত্রুটি নেই।</li>
                <li><strong>খ। প্রথম পর্যায়ের পরীক্ষা (First Line Check):</strong>
                    <ul style="list-style-type: circle; margin-left: 20px; color: #555;">
                        <li>রেডিয়েটরে পর্যাপ্ত পানি (Coolant) আছে।</li>
                        <li>ইঞ্জিন সাম্পে (Sump) পর্যাপ্ত তেল (Oil) আছে।</li>
                        <li>ফুয়েল ট্যাংকে পর্যাপ্ত জ্বালানি আছে।</li>
                        <li>কোনো সিস্টেমে লিকেজ (Leakage) নেই।</li>
                        <li>চাকার হাওয়ার চাপ (Tyre Pressure) সঠিক আছে।</li>
                    </ul>
                </li>
                <li><strong>গ। নিয়ন্ত্রণ ব্যবস্থা:</strong> ব্রেক, স্টিয়ারিং, হর্ন ও লাইট সঠিকভাবে কাজ করছে কিনা পরীক্ষা করুন।</li>
                <li><strong>ঘ। পরিচ্ছন্নতা:</strong> গাড়ির ভেতর ও বাহিরের পরিষ্কার-পরিচ্ছন্নতা নিশ্চিত করুন।</li>
                <li><strong>ঙ। কাগজপত্র:</strong> যাত্রার আগে সব প্রয়োজনীয় ডকুমেন্ট সংগ্রহ করুন।</li>
            </ul>

            <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; margin-top: 20px; margin-bottom: 20px; border-left: 5px solid #388e3c;">
                <strong>২। কর্তব্যে যাওয়ার পূর্বে বহনযোগ্য কাগজপত্র (Documents Checklist):</strong>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
                <tr style="background: #eee;">
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">ডকুমেন্টের নাম</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">ফরম নম্বর</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">গাড়ির চাহিদা ও আদেশ ফরম</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-2150</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">সরকারি গাড়ির ডিউটি স্লিপ</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-2007</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">চালকের অনুমতি ও আদেশপত্র</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-2208</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">পরিচয়পত্র (ID Card)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-3092</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">গাড়ির লগ বুক</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-2197</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">সড়ক দুর্ঘটনা প্রতিবেদন ফরম</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFY-1971</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">কার্যাদেশ (এমটিও'র স্বাক্ষরসহ)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFZ-1370</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">শেষ রসদ সনদ (LPC) ও গমনাদেশ</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">BAFS-1524 / BAFT-1762</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">মিল্টারি ক্রেডিট (MC) নোট</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">ফেরি পারাপারের জন্য</td>
                </tr>
            </table>

            <p style="margin-top: 15px; font-style: italic; color: #d32f2f;">
                * বাইরের স্টেশনে (Outstation) ডিউটির ক্ষেত্রে কার্যাদেশ, LPC এবং গমনাদেশ সাথে রাখা বাধ্যতামূলক।
            </p>
        `,
        youtubeId: 'mzHuFmATv6c' 
    },
   
    // ==========================================
    // 3. DASHBOARD (ড্যাশবোর্ড সূচক)
    // ==========================================

'Dashboard': {
        title: 'ড্যাশবোর্ড সূচক (Dashboard Indicators)',
        text: `
            <strong>১। রঙের গুরুত্ব (Color Coding)</strong>
            <p>ড্যাশবোর্ডের প্রতিটি বাতির রঙের একটি নির্দিষ্ট অর্থ আছে:</p>
            <ul>
                <li>🔴 <strong>লাল (Red):</strong> বিপদ! গাড়ি সাথে সাথে নিরাপদ স্থানে থামান।</li>
                <li>🟡 <strong>হলুদ/কমলা (Yellow/Amber):</strong> সতর্কতা। দ্রুত পরীক্ষা করা প্রয়োজন।</li>
                <li>🟢 🔵 <strong>সবুজ/নীল (Green/Blue):</strong> তথ্যমূলক বা সচল ফাংশন।</li>
            </ul>

            <hr>

            <strong>২। ড্যাশবোর্ড সূচক: কারণ ও করণীয়</strong>
            
            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid red;">
                <strong>🛑 হ্যান্ড ব্রেক ওয়ার্নিং (Hand Brake/Brake Fluid)</strong><br>
                <em>কারণ:</em> ব্রেক ফ্লুইডের পরিমাণ খুব কম বা হ্যান্ডব্রেক টানা।<br>
                <em>করণীয়:</em> গাড়ি থামিয়ে ব্রেক ফ্লুইড পরীক্ষা করুন এবং পূর্ণ করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid red;">
                <strong>🌡️ টেম্পারেচার ওয়ার্নিং (Temperature Warning)</strong><br>
                <em>কারণ:</em> রেডিয়েটরে কুলেন্ট নেই বা ইঞ্জিন অতিরিক্ত গরম।<br>
                <em>করণীয়:</em> নিরাপদ স্থানে থামুন। রেডিয়েটর কুলেন্ট চেক করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid #ffc107;">
                <strong>⚠️ টায়ার প্রেসার লো (Low Tire Pressure)</strong><br>
                <em>কারণ:</em> টায়ারের প্রেসার কম বা পাংচার।<br>
                <em>করণীয়:</em> টায়ার চেক করুন এবং সঠিক প্রেসার দিন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid #ffc107;">
                <strong>🛞 ABS ওয়ার্নিং (Anti-lock Braking System)</strong><br>
                <em>কারণ:</em> ABS সেন্সর বা মোটর কাজ করছে না।<br>
                <em>করণীয়:</em> ABS সেন্সর চেক করুন বা ওয়ার্কশপে দেখান।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid red;">
                <strong>🛢️ অয়েল প্রেসার লো (Oil Pressure Low)</strong><br>
                <em>কারণ:</em> ইঞ্জিন অয়েল কম বা অয়েল পাম্প নষ্ট।<br>
                <em>করণীয়:</em> ইঞ্জিন অয়েল পূরণ করুন, পাম্প চেক করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid #ffc107;">
                <strong>⚡ ইঞ্জিন/ইমিশন ওয়ার্নিং (Check Engine)</strong><br>
                <em>কারণ:</em> এয়ার ফিল্টার জ্যাম বা অক্সিজেন সেন্সর খারাপ।<br>
                <em>করণীয়:</em> এয়ার ফিল্টার পরিষ্কার করুন বা সেন্সর বদলান।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid #ffc107;">
                <strong>➰ গ্লো প্লাগ (Diesel Pre-heat Warning)</strong><br>
                <em>কারণ:</em> গ্লো রিলে বা প্লাগ কাজ করছে না।<br>
                <em>করণীয়:</em> গ্লো প্লাগ মেরামত বা পরিবর্তন করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid red;">
                <strong>🔋 ব্যাটারি/অল্টারনেটর ওয়ার্নিং</strong><br>
                <em>কারণ:</em> ব্যাটারির চার্জ কম বা অল্টারনেটর বেল্ট ঢিলা।<br>
                <em>করণীয়:</em> ব্যাটারি চার্জ ও অল্টারনেটর চেক করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid #ffc107;">
                <strong>💧 ওয়াটার ইন ফুয়েল ফিল্টার</strong><br>
                <em>কারণ:</em> ফুয়েল ফিল্টারে পানি জমেছে।<br>
                <em>করণীয়:</em> ফুয়েল ফিল্টার পরিষ্কার/ড্রেন করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-left: 5px solid red;">
                <strong>💺 সিট বেল্ট রিমাইন্ডার</strong><br>
                <em>কারণ:</em> সিট বেল্ট পরা হয়নি।<br>
                <em>করণীয়:</em> সিট বেল্ট দ্রুত এবং সঠিকভাবে লাগিয়ে নিন।
            </div>

            <p style="background:#e3f2fd; padding:10px; border-left:5px solid #2196f3;">
                <strong>পরামর্শ:</strong> গাড়ি স্টার্ট দেওয়ার সময় সব বাতি জ্বলে উঠবে। যদি স্টার্ট হওয়ার পরও কোনো লাল বা হলুদ বাতি জ্বলে থাকে, তবে সেটি গুরুত্বের সাথে নিন।
            </p>
        `,
        youtubeId: 'mzHuFmATv6c'
    //<img src="icons/oil_light.png" width="30"> অয়েল প্রেসার লো
    },
   
    // ==========================================
    // 4. Troubleshooting (ত্রুটি নিরূপণ)
    // ==========================================

    'Fault': {
        title: 'ত্রুটি নিরূপণ (Troubleshooting Guide)',
        text: `
            <div style="background: #fdf2f2; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #d32f2f;">
                <strong>গাড়ির সাধারণ ত্রুটি ও সমাধানের নির্দেশিকা:</strong>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <strong style="color: #d32f2f;">ক। ইঞ্জিন স্টার্ট হচ্ছে না</strong><br>
                <strong>🔍 কারণ:</strong> ব্যাটারি দুর্বল বা সংযোগ ঢিলা হতে পারে।<br>
                <strong>✅ করণীয়:</strong> ব্যাটারি টার্মিনাল চেক করুন এবং কানেকশন শক্ত করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">খ। ইঞ্জিন ওভারহিটিং (Overheating)</strong><br>
                <strong>🔍 কারণ:</strong> কুল্যান্ট কম অথবা রেডিয়েটর ফ্যান অচল।<br>
                <strong>✅ করণীয়:</strong> কুল্যান্ট লেভেল চেক করুন এবং ফ্যান ঠিক আছে কি না দেখুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">গ। ব্রেক কাজ করছে না / দুর্বল</strong><br>
                <strong>🔍 কারণ:</strong> ব্রেক ফ্লুইড কম অথবা ব্রেক প্যাড ক্ষয়প্রাপ্ত।<br>
                <strong>✅ করণীয়:</strong> ফ্লুইড লেভেল এবং ব্রেক প্যাডের অবস্থা পরীক্ষা করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #1976d2;">ঘ। গাড়ি একদিকে টানছে</strong><br>
                <strong>🔍 কারণ:</strong> টায়ারের বাতাস কম বা অ্যালাইনমেন্ট ভুল।<br>
                <strong>✅ করণীয়:</strong> টায়ার প্রেসার চেক করুন এবং হুইল অ্যালাইনমেন্ট ঠিক করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #1976d2;">ঙ। ইঞ্জিন থেকে অস্বাভাবিক শব্দ</strong><br>
                <strong>🔍 কারণ:</strong> ইঞ্জিন অয়েল কম বা বেল্ট/পুলি ঢিলা।<br>
                <strong>✅ করণীয়:</strong> অয়েল লেভেল চেক করুন এবং বেল্ট পরীক্ষা করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #1976d2;">চ। লাইট কাজ করছে না</strong><br>
                <strong>🔍 কারণ:</strong> ফিউজ নষ্ট বা বাল্ব পুড়ে গেছে।<br>
                <strong>✅ করণীয়:</strong> ফিউজ বক্স চেক করুন এবং বাল্ব পরিবর্তন করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">ছ। গিয়ার পরিবর্তন করতে সমস্যা</strong><br>
                <strong>🔍 কারণ:</strong> গিয়ার অয়েল কম বা ক্লাচ প্লেট ক্ষয়প্রাপ্ত।<br>
                <strong>✅ করণীয়:</strong> গিয়ার অয়েল চেক করুন এবং ক্লাচ পরীক্ষা করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #1976d2;">জ। স্টিয়ারিং ভারী লাগছে</strong><br>
                <strong>🔍 কারণ:</strong> পাওয়ার স্টিয়ারিং ফ্লুইড কম বা পাম্প নষ্ট।<br>
                <strong>✅ করণীয়:</strong> স্টিয়ারিং ফ্লুইড লেভেল এবং পাম্প পরীক্ষা করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #388e3c;">ঝ। গাড়ি ঝাঁকুনি দিচ্ছে / কাঁপছে</strong><br>
                <strong>🔍 কারণ:</strong> সাসপেনশন বা শক অ্যাবজর্বার নষ্ট।<br>
                <strong>✅ করণীয়:</strong> সাসপেনশন সিস্টেম এবং শক অ্যাবজর্বার চেক করুন।
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #388e3c;">ঞ। জ্বালানি খরচ বেশি হচ্ছে</strong><br>
                <strong>🔍 কারণ:</strong> এয়ার ফিল্টার ময়লা বা ইনজেক্টর অপরিষ্কার।<br>
                <strong>✅ করণীয়:</strong> এয়ার ফিল্টার ও ইনজেক্টর পরিষ্কার করুন।
            </div>
        `,
        youtubeId: 'mzHuFmATv6c' // Replace with a repair/troubleshooting video
    },
  
    // ==========================================
    // 5. Maintenance (রক্ষণাবেক্ষণ)
    // ==========================================
   'Maintenance': {
        title: 'রক্ষণাবেক্ষণ নির্দেশিকা (Vehicle Maintenance)',
        text: `
            <p style="background: #e8f5e9; padding: 10px; border-radius: 5px; border-left: 5px solid #2e7d32;">
                <strong>গাড়ির দীর্ঘস্থায়িত্ব ও নিরাপত্তার জন্য নিচের ৭টি কর্মমালা নিয়মিত অনুসরণ করুন।</strong>
            </p>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #2e7d32;">১নং কর্মমালা — সাধারণ (General)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>রেডিয়েটরে কুল্যান্ট লেভেল পরীক্ষা করা।</li>
                    <li>ইঞ্জিন অয়েল লেভেল পরীক্ষা ও প্রয়োজনমতো পূরণ করা।</li>
                    <li>নিচে তেল বা পানি লিক করছে কিনা দেখা।</li>
                    <li>ফুয়েল পাম্প/কার্বুরেটর লাইন চেক করা।</li>
                    <li>ফুয়েল ট্যাংকে পর্যাপ্ত জ্বালানি নিশ্চিত করা।</li>
                    <li>চাকার হাওয়ার চাপ ও নাট-বল্ট টাইট দেওয়া।</li>
                    <li>ব্যাটারি সেটিং ও ফ্যান বেল্ট পরীক্ষা করা।</li>
                    <li>লাইট ও হর্ন চেক করে <strong>এমটি সার্জেন্টকে</strong> রিপোর্ট করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #1976d2;">২নং কর্মমালা — বৈদ্যুতিক (Electrical)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>ব্যাটারির পানির লেভেল ও টার্মিনাল পরিষ্কার করা।</li>
                    <li>সেলফ স্টার্টারের মাউন্টিং ও কাজ করার ক্ষমতা পরীক্ষা।</li>
                    <li>অ্যাম্পিয়ার মিটার ও ব্যাটারির সব কানেকশন চেক করা।</li>
                    <li>ডায়নামো ও প্লাগের ছিদ্র পরিষ্কার রাখা।</li>
                    <li>সবশেষে <strong>এমটি সার্জেন্টকে</strong> রিপোর্ট করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #d32f2f;">৩নং কর্মমালা — কন্ট্রোল (Control System)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>ব্রেক ও হ্যান্ড ব্রেক সঠিকভাবে কাজ করছে কিনা পরীক্ষা।</li>
                    <li>ক্লাচ পেডেলের ফ্রি-প্লে ও গিয়ার শিফটিং চেক।</li>
                    <li>মাস্টার ও হুইল সিলিন্ডার লিক পরীক্ষা করা।</li>
                    <li>ড্যাশবোর্ডের সব গেজ ও ব্রেক পাইপ চেক করা।</li>
                    <li>এক্সিলারেটর পেডেলের সহজলভ্যতা নিশ্চিত করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #ff8f00;">৪নং কর্মমালা — ট্রান্সমিশন (Transmission)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>গিয়ার বক্স, ট্রান্সফার কেস ও ৪×৪ গিয়ার পরীক্ষা।</li>
                    <li>প্রপেলার শ্যাফট ও ইউনিভার্সাল জয়েন্ট চেক করা।</li>
                    <li>এক্সেল, ডিফারেনশিয়াল ও লিফ স্প্রিং পরীক্ষা।</li>
                    <li>শক অ্যাবজর্বার ও টাই-রড জয়েন্ট চেক করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #455a64;">৫নং কর্মমালা — ইঞ্জিন (Engine)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>অয়েল সাম্প, গ্যাসকেট ও পাইপ পরীক্ষা করা।</li>
                    <li>স্টার্ট অবস্থায় ইঞ্জিনের শব্দ ও রেডিয়েটর পানি চেক।</li>
                    <li>এয়ার ক্লিনার, কার্বুরেটর ফুয়েল লেভেল ও ইগনিশন সিস্টেম চেক।</li>
                    <li>ডিস্ট্রিবিউটর ও অল্টারনেটর সঠিকভাবে কাজ করা নিশ্চিত করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #5d4037;">৬নং কর্মমালা — ফ্রেম ও ফিটিং (Frame & Fittings)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>ফ্রেম, ক্রস মেম্বার ও বডির সব নাট-বল্ট পরীক্ষা।</li>
                    <li>মাডগার্ড, বাম্পার, টো-হুক ও দরজার ফিটিং চেক।</li>
                    <li>উইন্ডশিল্ড ফ্রেম, ভিউ মিরর ও সানভাইজার পরীক্ষা।</li>
                    <li>ওয়াইপার ও ক্যানভাস/ক্যানাপি ঠিকভাবে ফিট করা।</li>
                </ul>
            </details>

            <details style="background: #fff; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 8px;">
                <summary style="font-weight: bold; cursor: pointer; color: #00897b;">৭নং কর্মমালা — লুব্রিকেশন (Lubrication)</summary>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>গাড়ি পানি দিয়ে ধোয়া ও পরিষ্কার কাপড় দিয়ে মোছা।</li>
                    <li>সব গ্রিজ নিপলে গ্রিজ ও কন্ট্রোল লিংকে তেল দেওয়া।</li>
                    <li>লিফ স্প্রিং পরিষ্কার ও স্টিয়ারিং গিয়ার বক্সের তেল চেক।</li>
                    <li>মাস্টার সিলিন্ডার ও অল্টারনেটর পরীক্ষা করা।</li>
                </ul>
            </details>

            <p style="text-align: center; color: #d32f2f; font-weight: bold; margin-top: 20px;">
                ⚠️ প্রতিটি কর্মমালা শেষে এমটি সার্জেন্টকে রিপোর্ট প্রদান করুন।
            </p>
        `,
        youtubeId: 'mzHuFmATv6c' 
    },
    
    // ==========================================
    // 6. Road Safty Awareness & Training video (সচেতনতামূলক ও প্রশিক্ষণ ভিডিও)
    // ==========================================
'Video': {
        title: 'সচেতনতামূলক ভিডিও (Road Safety Awareness)',
        text: `
            <p style="background: #fff8e1; padding: 12px; border-radius: 8px; border-left: 5px solid #ffc107; font-weight: bold;">
                নিরাপদ ড্রাইভিং নিশ্চিত করতে নিচের ভিডিওগুলো মনোযোগ দিয়ে দেখুন:
            </p>

            <div style="display: grid; gap: 15px; margin-top: 20px;">
                
                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">১। অধিক গতি ও মৃত্যু (Speeding Kills)</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">অতিরিক্ত গতিতে গাড়ি চালালে দুর্ঘটনার ঝুঁকি অনেক বেশি হয়।</p>
                    <a href="https://www.youtube.com/watch?v=Lp8p6rG_4pI" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">২। লেন পরিবর্তনের ঝুঁকি</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">হঠাৎ লেন পরিবর্তন করলে বড় দুর্ঘটনা ঘটতে পারে।</p>
                    <a href="https://www.youtube.com/watch?v=7XG3Y96m8p0" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">৩। ওভারটেকিং সেফটি টিপস</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">ওভারটেক করার সময় সঠিক নিয়ম না মানলে মুখোমুখি সংঘর্ষ হতে পারে।</p>
                    <a href="https://www.youtube.com/watch?v=F0S160G_U9E" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">৪। মনোযোগ ধরে রাখা</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">মোবাইল ব্যবহার বা অন্য দিকে তাকানো অত্যন্ত বিপজ্জনক।</p>
                    <a href="https://www.youtube.com/watch?v=6Yid0I8BfSw" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">৫। ঘুম ও ক্লান্তি নিয়ে ড্রাইভিং</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">ক্লান্ত অবস্থায় গাড়ি চালালে নিয়ন্ত্রণ হারানোর সম্ভাবনা থাকে।</p>
                    <a href="https://www.youtube.com/watch?v=vV1p209t3_A" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

                <div style="background: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 10px;">
                    <strong style="color: #d32f2f;">৬। সিট বেল্ট জীবন রক্ষা করে</strong>
                    <p style="font-size: 0.9em; color: #555; margin: 5px 0;">সিট বেল্ট ব্যবহার করলে দুর্ঘটনায় মৃত্যুর ঝুঁকি অনেক কমে।</p>
                    <a href="https://www.youtube.com/watch?v=h-8PBx7isoM" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold;">▶ ভিডিও দেখুন</a>
                </div>

            </div>
        `,
        youtubeId: 'mzHuFmATv6c' // মূল ভিডিও হিসেবে একটি জেনারেল রোড সেফটি ভিডিও দেওয়া হয়েছে
    },
     // ==========================================
    // 7. First Aid Guide (প্রাথমিক চিকিৎসা)
    // ==========================================
'FirstAid': {
        title: 'প্রাথমিক চিকিৎসা (First Aid Guide)',
        text: `
            <div style="background: #e1f5fe; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #03a9f4;">
                <strong>🚑 দুর্ঘটনায় আহতদের জন্য তাৎক্ষণিক করণীয়:</strong>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">🩸 ১. রক্তপাত বন্ধ করা (Bleeding)</strong>
                <p style="font-size: 0.9em; margin: 5px 0;">রক্তপাতের স্থানে পরিষ্কার কাপড় বা হাত দিয়ে চেপে ধরুন। ক্ষতস্থানটি হৃদপিণ্ডের স্তরের উপরে রাখার চেষ্টা করুন।</p>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">🧠 ২. অজ্ঞান অবস্থা (Unconscious)</strong>
                <p style="font-size: 0.9em; margin: 5px 0;">আহত ব্যক্তির শ্বাস-প্রশ্বাস পরীক্ষা করুন। তাকে সাবধানে চিৎ করে শুইয়ে দিন এবং মাথা ও ঘাড় সোজা রাখার চেষ্টা করুন যেন শ্বাস নিতে সুবিধা হয়।</p>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">🦴 ৩. হার ভাঙা (Fracture)</strong>
                <p style="font-size: 0.9em; margin: 5px 0;">ভাঙা অংশটি নড়াচড়া করবেন না। কাঠ বা শক্ত কিছু দিয়ে ভাঙা অংশের দুই পাশে ব্যান্ডেজ বা কাপড় দিয়ে হালকাভাবে বেঁধে দিন যেন স্থির থাকে।</p>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">🔥 ৪. পুড়ে যাওয়া (Burns)</strong>
                <p style="font-size: 0.9em; margin: 5px 0;">পোড়া স্থানে অন্তত ১০-২০ মিনিট পরিষ্কার ঠান্ডা পানি ঢালুন। কোনো বরফ বা মলম লাগাবেন না। পরিষ্কার পাতলা কাপড় দিয়ে ঢেকে দিন।</p>
            </div>

            <div style="background: #fff; border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 10px;">
                <strong style="color: #d32f2f;">🤢 ৫. শক (Shock)</strong>
                <p style="font-size: 0.9em; margin: 5px 0;">আহত ব্যক্তিকে চিৎ করে শুইয়ে পা দুটি সামান্য উপরে তুলে দিন। গায়ের কাপড় ঢিলেঢালা করে দিন এবং তাকে আশ্বস্ত করুন।</p>
            </div>

            <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 5px solid #388e3c;">
                <strong>📦 প্রাথমিক চিকিৎসার বক্সে (First Aid Kit) যা থাকা জরুরি:</strong>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>জীবাণুনাশক (যেমন: স্যাভলন বা ডেটল)</li>
                    <li>ব্যান্ডেজ ও গজ কাপড়</li>
                    <li>তুলা</li>
                    <li>সিজার (কাঁচি) ও চিমটা</li>
                    <li>ব্যথানাশক মলম</li>
                    <li>বার্নল (পোড়া জায়গার জন্য মলম)</li>
                }
                </ul>
            </div>
            
            <p style="text-align: center; color: #d32f2f; font-weight: bold; margin-top: 20px;">
                🚨 প্রাথমিক চিকিৎসার পর দ্রুততম সময়ে আহত ব্যক্তিকে হাসপাতালে স্থানান্তর করুন।
            </p>
        `,
        youtubeId: 'L-6B1M0pW9U' // Replace with a First Aid training video
    },
     // ==========================================
    // 8. About AknoRM (অ্যাপ সম্পর্ক)
    // ==========================================
    'About': {
        title: 'অ্যাপ সম্পর্কে (About AknoRM)',
        text: `
            <div style="text-align: center; padding: 20px;">
                <img src="logo.png" style="width: 80px; margin-bottom: 15px;">
                <h3 style="color: var(--army-green);">AknoRM</h3>
                <p><strong>ASC Knowledge Repository (MT)</strong></p>
                <hr>
                <p style="text-align: left; line-height: 1.6;">
                    <strong>উদ্দেশ্য:</strong> বাংলাদেশ সেনাবাহিনীর এমটি (MT) পেশার সেনাসদস্যদের পেশাদার জ্ঞান বৃদ্ধি, নিরাপদ ড্রাইভিং নিশ্চিতকরণ এবং যান্ত্রিক ত্রুটি নিরূপণে তাৎক্ষণিক সহায়তা প্রদানের লক্ষ্যে এই ডিজিটাল প্ল্যাটফর্মটি তৈরি করা হয়েছে। 
                </p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 10px; margin-top: 20px;">
                    <p><strong>পরিকল্পনা ও উন্নয়নে:</strong></p>
                    <p style="font-weight: bold; color: var(--army-green); font-size: 1.2em;">লেঃ কর্নেল মোহাম্মদ আব্দুল কাদের,মোবাইলঃ০১৭৬৯০০৬৬২৩</p>
                    <p>Supply & Transport Directorate</p>
                </div>
                <p style="font-size: 0.8em; margin-top: 20px; color: #777;">ভার্সন: ১.০.০ (২০২৬)</p>
            </div>
        `,
        youtubeId: '' // এখানে কোনো ভিডিওর প্রয়োজন নেই
    }
    

}; // End of Object
