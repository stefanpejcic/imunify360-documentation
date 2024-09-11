import{_ as l,V as r,n as a,p as d,q as t,J as i,C as s,A as n,a5 as c}from"./framework-528c2e2a.js";const g="/images/user_files.png",f="/images/user_files_scanning.png",h="/images/history_user.png",u="/images/ignore_list_user.png",m={},p={class:"table-of-contents"};function b(w,e){const o=r("router-link");return a(),d("div",null,[e[3]||(e[3]=t("h1",{id:"user-interface",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#user-interface","aria-hidden":"true"},"#"),i(" User Interface")],-1)),e[4]||(e[4]=t("p",null,"There are following tabs in the Imunify360 end user interface:",-1)),t("nav",p,[t("ul",null,[t("li",null,[s(o,{to:"#files"},{default:n(()=>e[0]||(e[0]=[i("Files")])),_:1})]),t("li",null,[s(o,{to:"#history"},{default:n(()=>e[1]||(e[1]=[i("History")])),_:1})]),t("li",null,[s(o,{to:"#ignore-list"},{default:n(()=>e[2]||(e[2]=[i("Ignore List")])),_:1})])])]),e[5]||(e[5]=c('<h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2><p>Go to Imunify360 → Files tab. Here, there is a table with a list of infected files.</p><p><img src="'+g+'" alt=""></p><p>The table has the following columns:</p><ul><li><strong>Detected</strong> — displays the exact time when a file was detected as malicious</li><li><strong>File</strong> — the path where the file is located starting with root</li><li><strong>Reason</strong> — describes the signature which was detected during the scanning process. Names in this column depend on the signature vendor. You can derive some information from the signature ID itself. <code>SMW-SA-05155-wshll</code> – in this Signature ID: <ul><li>The first section can be either <code>SMW</code> or <code>CMW</code>. <code>SMW</code> stands for Server Malware and <code>CMW</code> stands for Client Malware</li><li>The second section of ID can be either <code>INJ</code> or <code>SA</code>. <code>INJ</code> stands for Injection (means Malware is Injected to some legitimate file) and <code>SA</code> stands for StandAlone (means File is Completely Malicious)</li><li>The third section is <code>05155</code>. This is simply an identification number for the signature.</li><li>The fourth section <code>wshll/mlw.wp/etc</code> explains the category and class of malware identified. Here, <code>wshll</code> stands for web shell (<code>mlw</code> stands for malware).</li><li>The fifth section is <code>0</code>, which provides the version number of the signature.</li></ul></li><li><strong>Status</strong> — displays the file status: <ul><li><strong>Infected</strong> — threat was detected after scanning. If a file was not cleaned after cleanup, the info icon is displayed. Hover mouse over info icon to display the reason</li><li><strong>Cleaned</strong> — infected file is cleaned up</li><li><strong>Content removed</strong> — a file content was removed after cleanup</li><li><strong>Cleanup queued</strong> — infected file is queued for cleanup. Actions:</li></ul></li><li><strong>Add to Ignore List</strong> — add file to Ignore List and remove it from the Malicious files list. Note that if a file is added to Ignore List, Imunify360 will no longer scan this file</li><li><strong>View file</strong> — click <em>eye</em> icon in the file line and the file content will be displayed in the popup. Only the first 100Kb of the file content will be shown in case if a file has bigger size</li><li><strong>Cleanup</strong> — click to cleanup the file.</li><li><strong>Delete</strong> — remove the file from the server and from the list of Malicious files.</li><li><strong>Restore original</strong> — click <em>Restore original</em> to restore original file after cleaning up if backup is available.</li></ul><p>To perform a bulk action, tick required users and click the corresponding button above the table.</p><p>The following filters are available:</p><ul><li><strong>Timeframe</strong> — displays the results filtered by chosen period or date.</li><li><strong>Status</strong> — displays the results filtered by chosen status.</li><li><strong>Items per page displayed</strong> — click the number at the table bottom.</li></ul><p>The table can be sorted by detection date (Detected), file path (File), Reason, and Status.</p><p>If a user is allowed by an administrator to scan his files, he can see the <em>Start scanning</em> button.</p><p><img src="'+f+'" alt=""></p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><p>History tab contains data of all actions for all files. Go to Imunify360 → History tab. Here, there is a table with a list of files.</p><p><img src="'+h+'" alt=""></p><p>The table has the following columns:</p><ul><li><strong>Date</strong> — action timestamp.</li><li><strong>Path to File</strong> — path to the file starting from the root.</li><li><strong>Cause</strong> — displays the way malicious file was found: <ul><li><strong>Manual</strong> — scanning or cleaning was manually processed by a user.</li><li><strong>On-demand</strong> — scanning or cleaning was initiated/made by a user;</li><li><strong>Real time</strong> — scanning or cleaning was automatically processed by the system.</li></ul></li><li><strong>Owner</strong> — displays a user name of file owner.</li><li><strong>Initiator</strong> — displays the name of a user who was initiated the action. For system actions the name is System.</li><li><strong>Event</strong> — displays the action with the file: <ul><li><strong>Detected as malicious</strong> — after scanning the file was detected as infected;</li><li><strong>Cleaned</strong> — the file is cleaned up.</li><li><strong>Failed to clean up</strong> — there was a problem during cleanup. Hover mouse over the info icon to read more.</li><li><strong>Added to Ignore List</strong> — the file was added to Ignore List. Imunify360 will not scan it.</li><li><strong>Restored original</strong> — file content was restored as not malicious.</li><li><strong>Cleanup removed content</strong> — file contend was removed after cleanup.</li><li><strong>Deleted from Ignore List</strong> — the file was removed from Ignore List. Imunify360 will scan it.</li><li><strong>Deleted</strong> — the file was deleted.</li><li><strong>Submitted for analysis</strong> — the file was submitted to Imunify team for analysis.</li><li><strong>Failed to delete</strong> — there was a problem during removal. Hover mouse over the info icon to read more.</li><li><strong>Failed to ignore</strong> — there was a problem during adding to Ignore List. Hover mouse over the info icon to read more.</li><li><strong>Failed to delete from ignore</strong> — there was a problem during removal from Ignore List. Hover mouse over the info icon to read more.</li></ul></li></ul><p>The table can be sorted by Date, Path to File, Cause, and Owner.</p><h2 id="ignore-list" tabindex="-1"><a class="header-anchor" href="#ignore-list" aria-hidden="true">#</a> Ignore List</h2><p>Ignore List tab contains the list of files and directories that are excluded from Malware Scanner scanning. Go to Imunify360 → Ignore List tab. Here, there is a table with a list of files.</p><p><img src="'+u+'" alt=""></p><p>The table has the following columns:</p><ul><li><strong>Added</strong> — the date when the file was added to Ignore List.</li><li><strong>Path</strong> — path to the file starting from the root.</li><li><strong>Actions</strong>: <ul><li><strong>Remove from Ignore List</strong> — click <em>Bin</em> icon to remove the file from the Ignore List and start scanning.</li><li><strong>Add new file or directory</strong> — click <em>Plus</em> icon to add a new file or directory to Ignore List. To perform a bulk action, tick required files and click the corresponding button above the table.</li></ul></li></ul><p>The following filters are available:</p><ul><li><strong>Timeframe</strong> — displays the results filtered by chosen period or date.</li><li><strong>Items per page displayed</strong> — click the number at the table bottom.</li></ul><p>The table can be sorted by Added and Path. By default, it is sorted from newest to oldest.</p>',25))])}const I=l(m,[["render",b],["__file","index.html.vue"]]);export{I as default};
