package com.example.demo.registration;


public class CustomerRegistration {
		private String fname;
		private String lname;
		private String email;
		private String cno;
		private String uname;
		private String pwd;
		private String cpwd;
		private int qid;
		private String ans;
		public CustomerRegistration(String fname, String lname, String email, String cno, String uname, String pwd,
				String cpwd, int qid, String ans) {
			super();
			this.fname = fname;
			this.lname = lname;
			this.email = email;
			this.cno = cno;
			this.uname = uname;
			this.pwd = pwd;
			this.cpwd = cpwd;
			this.qid = qid;
			this.ans = ans;
		}
		public CustomerRegistration() {
			super();
		}
		public String getFname() {
			return fname;
		}
		public void setFname(String fname) {
			this.fname = fname;
		}
		public String getLname() {
			return lname;
		}
		public void setLname(String lname) {
			this.lname = lname;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getCno() {
			return cno;
		}
		public void setCno(String cno) {
			this.cno = cno;
		}
		public String getUname() {
			return uname;
		}
		public void setUname(String uname) {
			this.uname = uname;
		}
		public String getPwd() {
			return pwd;
		}
		public void setPwd(String pwd) {
			this.pwd = pwd;
		}
		public String getCpwd() {
			return cpwd;
		}
		public void setCpwd(String cpwd) {
			this.cpwd = cpwd;
		}
		public int getQid() {
			return qid;
		}
		public void setQid(int qid) {
			this.qid = qid;
		}
		public String getAns() {
			return ans;
		}
		public void setAns(String ans) {
			this.ans = ans;
		}
		@Override
		public String toString() {
			return "CustomerRegistration [fname=" + fname + ", lname=" + lname + ", email=" + email + ", cno=" + cno
					+ ", uname=" + uname + ", pwd=" + pwd + ", cpwd=" + cpwd + ", qid=" + qid + ", ans=" + ans + "]";
		}
		
		

	}

