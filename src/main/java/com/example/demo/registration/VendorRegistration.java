package com.example.demo.registration;


public class VendorRegistration {
	
	private String vname;
	private String email;
	private String cno;
	private int city;
	private int area;
	private String addline;
	private int plan;
	private double amount;
	private String transid;
	private String uname;
	private String pwd;
	private String cpwd;
	private int qid;
	private String ans;
	public VendorRegistration(String vname, String email, String cno, int city, int area, String addline, int plan,
			double amount, String transid, String uname, String pwd, String cpwd, int qid, String ans) {
		super();
		this.vname = vname;
		this.email = email;
		this.cno = cno;
		this.city = city;
		this.area = area;
		this.addline = addline;
		this.plan = plan;
		this.amount = amount;
		this.transid = transid;
		this.uname = uname;
		this.pwd = pwd;
		this.cpwd = cpwd;
		this.qid = qid;
		this.ans = ans;
	}
	public VendorRegistration() {
		super();
	}
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
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
	public int getCity() {
		return city;
	}
	public void setCity(int city) {
		this.city = city;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public String getAddline() {
		return addline;
	}
	public void setAddline(String addline) {
		this.addline = addline;
	}
	public int getPlan() {
		return plan;
	}
	public void setPlan(int plan) {
		this.plan = plan;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getTransid() {
		return transid;
	}
	public void setTransid(String transid) {
		this.transid = transid;
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
		return "VendorRegestration [vname=" + vname + ", email=" + email + ", cno=" + cno + ", city=" + city + ", area="
				+ area + ", addline=" + addline + ", plan=" + plan + ", amount=" + amount + ", transid=" + transid
				+ ", uname=" + uname + ", pwd=" + pwd + ", cpwd=" + cpwd + ", qid=" + qid + ", ans=" + ans + "]";
	}
	
	

}


