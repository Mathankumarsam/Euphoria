from rest_framework import serializers
from .models import Order, Cart

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  # Return the username as a string
    product = serializers.StringRelatedField()  # Return the product name as a string

    class Meta:
        model = Order
        fields = ['user', 'product', 'quantity', 'total_price', 'date_ordered']


class CartItemSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ['product', 'quantity', 'total_price']

    def get_total_price(self, obj):
        return obj.product.price * obj.quantity