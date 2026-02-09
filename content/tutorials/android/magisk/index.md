---
title: "👺 Root android by magisk"
tags:
  - android
  - tutorials
---

# เครื่องมือ

- [crDroid (ROM)](https://crdroid.net/)
- [OrangeFox (Recovery)](https://orangefox.download/)
- [NikGapps (Services)](https://nikgapps.com/crdroid-official/)
- [adb & fastboot](https://developer.android.com/tools/releases/platform-tools?hl=th)
- [Magisk Alpha](https://t.me/s/magiskalpha)

# ติดตั้ง ROM

เข้า Fastboot โดยกดปุ่ม Volum Down + Power

```bash
fastboot boot Recovery/OrangeFox-alioth-stable@R11.1_5_2/recovery.img
```

จะบูทไปที่ OrangeFox ให้ไปที่ Wipe -> Format Data ทำการ Format Data แล้ว Reboot System

เข้า Fastboot อีกครั้งและไปที่ Menu -> ADB & Sideload

```bash
adb sideload Rom/crDroidAndroid-14.0-20241217-alioth-v10.11.zip
```

เมื่อเสร็จแล้วให้ Reboot System

# ติดตั้ง Gapps (Google Service)

เนื่องจาก crDroid เป็นรอมแบบ Vanilla จะไม่มี Google Service ต่างๆมาให้แม้กระทั่ง Playstore เลยจำเป็นต้องแฟลช Gapps ลงไปเพิ่ม

เข้า Recovery โดยกดปุ่ม Volum Up + Power เข้ามาถึงกด Factory reset -> Format data/factory reset และกด Format data เสร็จแล้วไปที่ Apply update -> Apply from ADB

```bash
adb sideload Services/NikGapps-crdroid-official-arm64-14-20241212-signed.zip
```

เมื่อเสร็จแล้วให้ Reboot System now
ระบบจะบูทเข้าเครื่องและให้เริ่มทำการเปิดใช้งานเครื่องโดยตั้งค่าพื้นฐานต่างๆ

# Root

ดาวน์โหลด Magisk ที่เป็นไฟล์ .apk มาแล้วทำการคัดลอกไฟล์และเปลี่ยนนามสกุลไฟล์เป็น .zip

![[copymagisk.jpg]]
<p align="center">
    <em>(รูปที่ 1 แอป Magisk และไฟล์แฟลช)</em>
</p>

ติดตั้งแอป Magisk ด้วย .apk และเข้า Fastboot อีกครั้ง

```bash
fastboot boot Recovery/OrangeFox-alioth-stable@R11.1_5_2/recovery.img
```

บูท OrangeFox อีกครั้ง และเมื่อเข้ามาแล้วไปที่ File และไปที่ Folder ที่จัดเก็บ แอป Magisk และไฟล์แฟลช (รูปที่ 1) เลือก Magisk ที่เป็น .zip แล้ว Install

เมื่อเสร็จแล้วให้ Reboot System แล้วเข้าแอป Magisk อีกครั้งจะแสดงข้อความ "Requires Additional Setup" ให้กด OK หรือถ้าไม่แสดงให้กด Install ที่ Magisk

![[magisksetupafterflash.png]]
<p align="center">
    <em>(รูปที่ 2 ระบบต้องการให้ติดตั้งไฟล์ Patch)</em>
</p>

![[magisksetupinstallroot.png]]
<p align="center">
    <em>(รูปที่ 3 ติดตั้ง Root Magisk)</em>
</p>

เพิ่มเติมนิดนึงใน Magisk ให้ไปที่ Setting => Hide the Magisk app เพื่อทำการซ่อน Magisk App โดยมันจะเปลี่ยน Package Name เพื่อ Bypass บางแอปที่ตรวจจับแอปในเครื่องว่าลง Magisk หรือไม่

เรียบร้อยแล้วกับการลง Custom ROM และ Root ด้วย Magisk