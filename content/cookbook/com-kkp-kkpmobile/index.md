---
title: 🔪 Dissecting the KKP MOBILE (Chapter 1)
tags:
  - android
  - pentest
  - bank
  - writeup
---

> [!danger]
> เนื้อหาในบทความนี้เปิดเผยขั้นตอนการทำงานทั้งหมดของผู้เขียน ซึ่งเป็นการกระทำที่ไม่ได้รับอนุญาติจากทางธนาคาร การนำไปทำตามเนื้อหาอาจทำให้ท่านกระทำผิดกฏหมาย พรบ. ว่าด้วยการกระทําความผิดทางคอมพิวเตอร์ พ.ศ. 2560

# 🎯 เป้าหมาย

ปรับแต่งแอปพลิเคชั่นให้สามารถใช้งาน `USB Debugging` ได้โดยที่ต้อง `Compile` แอปพลิเคชั่นออกมาใหม่ให้สามารถนำออกมาเป็นไฟล์ APK เพื่อที่จะสามารถนำไปใช้งานบนโทรศัพท์เครื่องอื่นได้ โดยที่ไม่ต้องรูทเครื่อง

# 🕵🏻 วิเคราะห์แอปพลิเคชั่น

ขึ้นตอนแรกเรามาเช็ค lib.so กันก่อนว่าตัวแอปพลิเคชั่นนำ lib อะไรมาใช้งานบ้าง

![[libcheck-kkp.png]]

# 📦 จัดเตรียม APK

ตัวแอปพลิเคชั่น `KKP MOBILE` เป็นแอปพลิเคชั่นธนาคาร จะไม่สามารถใช้วิธีการดึง APK จากบทความ [📦 Get original APK](/tutorials/android/apk) มาใช้งานได้เพราะตัวแอปจะมีการตรวจจับการแก้ไขแอปพลิเคชั่น เพราะฉะนั้นเราจะต้องใช้ท่ายากนิดหน่อย โดยอาศัย 2 สิ่งนี้

1. โทรศัพท์ที่ทำการรูทเครื่องมาแล้ว
2. [MT Manager](https://mt2.cn/)

## 🕵🏻 ติดตั้งแอปพลิเคชั่นจาก Playstore

อ้างอิงจาก `credoapp.p008private.i9`

```java
package credoapp.p008private;

import android.util.Base64;
import android.util.Base64OutputStream;
import dxkltob.ah;
import java.io.ByteArrayOutputStream;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import kotlin.TypeCastException;
import kotlin.jvm.internal.Intrinsics;

/* loaded from: classes5.dex */
public final class i9 implements t5 {
    public static String b(byte[] bArr) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        Base64OutputStream base64OutputStream = new Base64OutputStream(byteArrayOutputStream, 0);
        base64OutputStream.write(bArr);
        base64OutputStream.close();
        String byteArrayOutputStream2 = byteArrayOutputStream.toString();
        Intrinsics.checkExpressionValueIsNotNull(byteArrayOutputStream2, ah.a(27430));
        byteArrayOutputStream.close();
        return byteArrayOutputStream2;
    }

    @Override // credoapp.p008private.t5
    public final String a(byte[] value) {
        Intrinsics.checkParameterIsNotNull(value, "value");
        try {
            Signature signature = Signature.getInstance("SHA256withRSA");
            PrivateKey generatePrivate = KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(Base64.decode("MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCZ6SbU0TE0MKM\nNuETIXjmfpWyv5cYBkX5cncFyenFuKYbKufUUBaTPwojej1p2i9c8NA1AffsJ/WE\nq6KZSun80AtQVuRSIib71HXsFf3N149tb0cKCcaxqkZkalTKQFLk9VmWNjLj1H2q\nGI7rfB8E/hSr/agxNfJ52WmV8ok+71+C0uJdMNwx+JO+O+Ojcm3vkPu1TQSxxLde\no8Y9OWqo7p/UBRVoWmqrI5s3BWOIBUFH18WsNwrDu2RxGrhDHFMiZd+lbuNHC+OL\nmrYODfik3I5tVL8FmvzlRraLn4KoR9KdWw5QRyr3VuX4uBzHcTpg/yFjMya+i5d+\nIUnQOAPJAgMBAAECggEALckRKI/c82mjWDiYm9PXUJnhkd6zrDHWCyDdTVy3lRye\n6mkZfpR6LKW9MovYqPR9ESuaLdHP3SuwFFYEDoxpPWSWNY6xaXKnscnhGAA57V/m\nZMS/e2rABBnxSDcOzy+FFm1+cvVC2QuzqPrttiJef+ODZNpx4V0uRWpiBrG/hzWZ\n4tL77O1DovHsnXfcDMdOo5iIr638dULXUzfd/Nx2cxGC/wybGFgS6XG/kUiJMaeI\nT0aASZbTIgzMa22HaAKSL5iIFpNr+ijOY5aAAXQ0oScNzpnhHOCOWoxgQKJhssxx\n4eVp4c6k/NR8QfFago3zj1R4kiRDESht8KDsgjg2bQKBgQDxqhtT/QDZtvA4BCfX\nULwplmesZM54QPWKFwAtSJCwIuyjg9Nt3TEVGCFbX5BpHGjH52/jtaJVjUDQf0jK\n7G19tcRCV8AjI9Fj5Kqb1HnClLsliPLyn4AqYhOPfbvq8wtIZVyFz21cUM2kiQgM\n9DF5A7Yy7FLl98FUGNXLxtYdCwKBgQDN79svtMV4c3oTuM9XdlUEqS81q19qPKRx\nQ3kNQk5IH4rEQsyg8X4IebRlX99Z0WsunIxx2+0Dv4LHsCy8iNrhy2PWifJPug/y\ngFyHn/V33nps/pe05qY4nLrLJx82bhCgVp+EfGWpPfBiSRDuaBTQJ3a+KB0E/qi1\ndFciGY7e+wKBgAqPlIInHFJnXDgWdmdCb/ahTAaMoTlAHXrbZnaUJT6NSCodKLA0\namCxnUOQ+Y6eXzXdN1aMKXvzoFF8PoIfsuk7eEgt7YebmRr0c0A8GNYYCdWqFnPj\n5IX1o0UyCXRLCsMvKsvuNKlEHriCBIgMY90V/HBdQ4IpQZmbPDybg9/hAoGBAI0i\nHoMZTmP4L+eoNmDodeeV0wbjBacXHFOLPEC7+k4vX7iVVwvNtOQ2FE2NYNJ7VQtC\nunWllU+GRih4MpCa8fbgnvF+5JODHj7BfahtFZsq25gq+uk9URlnQBTOIPP6hmZ8\nNyJi5oEQM9gH3xSkO+9TvGshrpGnvRNuQfDatzFVAoGAeMYmWmQZ3NJEPoiBRJvl\n39Urc8dq0NT8L6sgCddq9fDczl1lN5HV91GGKmc1wJvpgiHZR3jK9Fqn4JZKuTGJ\nah2nZ2XjpI4P/wyROzZ/2bphK7snu2Pl8cBVDLkTqRe3ZZJQU+roOThzSufaC43d\nwI80JQrJRdyJAzXF3LYTlHg=", 0)));
            if (generatePrivate == null) {
                throw new TypeCastException("null cannot be cast to non-null type java.security.interfaces.RSAPrivateKey");
            }
            signature.initSign((RSAPrivateKey) generatePrivate);
            signature.update(value);
            byte[] sign = signature.sign();
            Intrinsics.checkExpressionValueIsNotNull(sign, "rsaSignatureProvider.sign()");
            return b(sign);
        } catch (Exception unused) {
            return b(new byte[0]);
        }
    }
}
```

# Deeplink

ถ้าอยากรู้ว่า Deeplink คืออะไรสามารถอ่านได้ที่บทความ [🔗 Get Deeplink](/tutorials/android/apk) จากการตรวจสอบเบื้องต้นตัวแอปพลิเคชั่น `KKP MOBILE` ได้ตั้งไว้ให้มี Deeplink ทั้งหมด 4 ลิงค์ โดยประกอบไปด้วย

1. https://m.kkpfg.com/W6Bx `basic deeplink`
2. http://m.kkpfg.com/W6Bx `basic deeplink`
3. https://m-kkpfg.onelink.me/W6Bx `appsflyer deeplink`
4. http://m-kkpfg.onelink.me/W6Bx `appsflyer deeplink`
5. [ทดสอบ KKP](kkpmobile://products/deposit/savvy/product_detail)
6. [ทดสอบ KBANK](kbank.kplus://dfwithkplus)
7. [ทดสอบ mycimb](mycimb://transferV3?page=re_transfer&destination_bank_code=030&destination_id=020426060933&destination_name_th=ธนาคารออมสิน&destination_name_en=GSB&destination_type=ACCOUNT_ID&destination_bank_url=https://storage.googleapis.com/cimb-th/platform/icon_banks/content/th/gsb.png&amount=10.0000&service_id=TRFACT2ACT)

อ้างอิงจาก `AndroidManifest.xml`

```xml
<activity android:theme="@style/Theme.Transparent_res_0x7f150341"
    android:label="@string/app_name"
    android:name="com.kkp.kkpmobile.app.ExternalLinkHandlerActivity"
    android:exported="true"
    android:launchMode="singleTask"
    android:screenOrientation="portrait">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="https" android:host="m.kkpfg.com" android:pathPrefix="/W6Bx"/>
    </intent-filter>
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="http" android:host="m.kkpfg.com" android:pathPrefix="/W6Bx"/>
    </intent-filter>
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="https" android:host="m-kkpfg.onelink.me" android:pathPrefix="/W6Bx"/>
    </intent-filter>
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="http" android:host="m-kkpfg.onelink.me" android:pathPrefix="/W6Bx"/>
    </intent-filter>
</activity>
```

## Deeplink ParameterKey

อ้างอิงจาก `com.kkp.kkpmobile.app.deeplink.DeepLinkParameterKey`

- REFERRAL_CODE แทนค่าพารามิเตอร์ "referral_code"
- PROMOTION_CODE แทนค่าพารามิเตอร์ "promotion_code"
- ISSUER_CODE แทนค่าพารามิเตอร์ "issuer_code"
- PRODUCT_CODE แทนค่าพารามิเตอร์ "product_code"
- PACKAGE_CODE แทนค่าพารามิเตอร์ "package_code"
- AFFILIATE_ID แทนค่าพารามิเตอร์ "affiliate_id"
- ACCOUNT_FROM แทนค่าพารามิเตอร์ "account_from"
- ACCOUNT_TO แทนค่าพารามิเตอร์ "account_to"
- SERVICE แทนค่าพารามิเตอร์ "service",
- REDIRECT_LINK แทนค่าพารามิเตอร์ "redirect_link"
- BILLER_ID แทนค่าพารามิเตอร์ "biller_id"
- REFERENCE_1 แทนค่าพารามิเตอร์ "ref_1"
- REFERENCE_2 แทนค่าพารามิเตอร์ "ref_2"
- REFERENCE_3 แทนค่าพารามิเตอร์ "ref_3"
- UTM_MEDIA_SOURCE แทนค่าพารามิเตอร์ "utm_media_source"
- UTM_MEDIUM แทนค่าพารามิเตอร์ "utm_medium"
- UTM_CAMPAIGN แทนค่าพารามิเตอร์ "utm_campaign"
- TOKEN แทนค่าพารามิเตอร์ "token"
- REF_CODE แทนค่าพารามิเตอร์ "refcode"
- SOURCE_TO_PRODUCT_DETAIL แทนค่าพารามิเตอร์ "source_to_product_detail"