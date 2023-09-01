package com.example.demo.registration;


public class LabourRegistration {

	private String fname;
	private String lname;
	private String email;
	private String cno;
	private int exp;
	private String stat;
	private String uname;
	private String pwd;
	private String cpwd;
	private int qid;
	private String ans;
	private double rates;
	public LabourRegistration(String fname, String lname, String email, String cno, int exp, String stat, String uname,
			String pwd, String cpwd, int qid, String ans, double rates) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.cno = cno;
		this.exp = exp;
		this.stat = stat;
		this.uname = uname;
		this.pwd = pwd;
		this.cpwd = cpwd;
		this.qid = qid;
		this.ans = ans;
		this.rates = rates;
	}
	public LabourRegistration() {
		super();
	}
	@Override
	public String toString() {
		return "LabourRegestration [fname=" + fname + ", lname=" + lname + ", email=" + email + ", cno=" + cno
				+ ", exp=" + exp + ", stat=" + stat + ", uname=" + uname + ", pwd=" + pwd + ", cpwd=" + cpwd + ", qid="
				+ qid + ", ans=" + ans + "]";
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
	public int getExp() {
		return exp;
	}
	public void setExp(int exp) {
		this.exp = exp;
	}
	public String getStat() {
		return stat;
	}
	public void setStat(String stat) {
		this.stat = stat;
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
	public double getRates() {
		return rates;
	}
	public void setRates(double rates) {
		this.rates = rates;
	}
	
	
	
	
	
}
